const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const DB_FILE = path.join(__dirname, 'responses.json');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));

// Initialize DB file if not exists
if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify([]));
}

app.get('/api/health', (req, res) => {
    res.send('Valentine Server is Running! 💖');
});

app.post('/api/save-response', (req, res) => {
    console.log('Received response:', req.body);
    const { name, response, timestamp } = req.body;

    let currentData = [];
    try {
        if (fs.existsSync(DB_FILE)) {
            const fileContent = fs.readFileSync(DB_FILE, 'utf8');
            // Handle empty file case
            currentData = fileContent ? JSON.parse(fileContent) : [];
        }
    } catch (err) {
        console.error('Error reading DB:', err);
        currentData = [];
    }

    currentData.push({
        name: name || 'Anonymous',
        response: response || 'Unknown',
        timestamp: timestamp || new Date().toISOString()
    });

    fs.writeFileSync(DB_FILE, JSON.stringify(currentData, null, 2));

    console.log(`[💖] New Response: ${response} from ${name || 'Anonymous'}`);

    res.json({ success: true, message: "Response saved! 💘" });
});

app.get('/api/responses', (req, res) => {
    if (fs.existsSync(DB_FILE)) {
        const data = JSON.parse(fs.readFileSync(DB_FILE));
        res.json(data);
    } else {
        res.json([]);
    }
});


// Handle any requests that don't match the ones above
app.get(/(.*)/, (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
