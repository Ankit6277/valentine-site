@echo off
set "PATH=%PATH%;C:\Program Files\nodejs"
echo Starting Valentine's Day Project...

echo Launching Backend Server...
start "Valentine Backend" /D "server" node server.js

echo Launching Frontend Client...
start "Valentine Frontend" /D "client" npm run dev

echo Servers are running!
echo Frontend: http://localhost:5173
echo Backend: http://localhost:3000
pause
