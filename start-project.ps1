# Ensure Node.js is in the path for this session
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    $env:Path += ";C:\Program Files\nodejs"
    Write-Host "Added Node.js to PATH for this session." -ForegroundColor Yellow
}

$ErrorActionPreference = "Stop"

Write-Host "Starting Valentine's Day Project..." -ForegroundColor Pink

# Start Backend
Write-Host "Launching Backend Server..." -ForegroundColor Cyan
Start-Process node -ArgumentList "server.js" -WorkingDirectory "server"

# Start Frontend
Write-Host "Launching Frontend Client..." -ForegroundColor Cyan
# Using cmd /c ensuring creating a new window that stays open if there is an error
Start-Process cmd -ArgumentList "/k npm run dev" -WorkingDirectory "client"

Write-Host "Servers are running! Check the new windows." -ForegroundColor Green
Write-Host "Frontend: http://localhost:5173"
Write-Host "Backend: http://localhost:3000"
Read-Host "Press Enter to close this launcher..."
