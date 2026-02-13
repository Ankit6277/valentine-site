@echo off
set "PATH=%PATH%;C:\Users\ranki\AppData\Roaming\npm;C:\Program Files\nodejs"

echo ========================================================
echo   SHARING YOUR VALENTINE SITE
echo ========================================================
echo.
echo 1. Ensure 'start-project.bat' is ALREADY running in another window.
echo.
echo 2. We are generating a public URL for your girlfriend to access.
echo.
echo 3. LocalTunnel has a security check. You will need the IP address below:
echo.
echo    YOUR IP ADDRESS IS:
for /f %%a in ('curl -s https://ipv4.icanhazip.com') do set "MYIP=%%a"
echo    %MYIP%
echo.
echo    (I have copied this IP to your clipboard for you!)
echo    %MYIP% | clip
echo.
echo 4. Access the URL provided below.
echo 5. On the webpage, paste the IP address (%MYIP%) into the "Tunnel Password" box.
echo 6. Click "Click to Submit".
echo.
echo ========================================================
echo.

call npx localtunnel --port 5173

pause
