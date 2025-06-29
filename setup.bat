@echo off
REM Lai-Translator Setup Script for Windows
REM This script helps you set up the Lai-Translator project quickly

echo 🌟 Welcome to Lai-Translator Setup! 🌟
echo ======================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18 or higher.
    echo Visit: https://nodejs.org/
    pause
    exit /b 1
)

REM Check Node.js version
for /f "tokens=1,2,3 delims=." %%a in ('node --version') do set NODE_VERSION=%%a
set NODE_VERSION=%NODE_VERSION:~1%
if %NODE_VERSION% LSS 18 (
    echo ❌ Node.js version 18 or higher is required. Current version: 
    node --version
    pause
    exit /b 1
)

echo ✅ Node.js version: 
node --version

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm.
    pause
    exit /b 1
)

echo ✅ npm version: 
npm --version

REM Install backend dependencies
echo 📦 Installing backend dependencies...
npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install backend dependencies
    pause
    exit /b 1
)

REM Install frontend dependencies
echo 📦 Installing frontend dependencies...
cd client
npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install frontend dependencies
    pause
    exit /b 1
)

cd ..

REM Create .env file if it doesn't exist
if not exist .env (
    echo 🔧 Creating .env file...
    copy env.example .env
    echo ✅ .env file created from template
    echo ⚠️  Please edit .env file and add your OpenAI API key
) else (
    echo ✅ .env file already exists
)

echo.
echo 🎉 Setup completed successfully!
echo.
echo 📋 Next steps:
echo 1. Edit .env file and add your OpenAI API key
echo 2. Run 'npm start' to start the backend server
echo 3. Run 'cd client ^&^& npm start' to start the frontend
echo 4. Open http://localhost:5002 in your browser
echo.
echo 📚 For more information, see README.md
echo.
echo 🌟 Happy translating! 🌟
pause 