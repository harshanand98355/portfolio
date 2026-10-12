@echo off
setlocal
title Connect and Update Portfolio on GitHub
cd /d "%~dp0"

echo.
echo ==========================================
echo   Connect and Update Portfolio on GitHub
echo ==========================================
echo.
where git >nul 2>&1
if errorlevel 1 (
  echo ERROR: Git is not installed or not on PATH.
  echo Install Git: https://git-scm.com/download/win
  pause
  exit /b 1
)

git rev-parse --is-inside-work-tree >nul 2>&1
if not errorlevel 1 goto existing_repo

echo This folder is not connected to a Git repository yet.
echo.
echo IMPORTANT:
echo 1. This folder should contain your portfolio files, such as index.html.
echo 2. If you already cloned the GitHub repository, move this BAT file into that cloned folder.
echo 3. Otherwise, this script can clone your GitHub Pages repository into a NEW subfolder.
echo.
set /p repo=Enter your GitHub repository HTTPS URL (or press Enter to cancel): 
if "%repo%"=="" (
  echo Cancelled. No files were changed.
  pause
  exit /b 0
)

echo.
echo Cloning repository into a new folder named github-portfolio...
git clone "%repo%" "%~dp0github-portfolio"
if errorlevel 1 (
  echo.
  echo ERROR: Clone failed. Check the URL and GitHub authentication.
  pause
  exit /b 1
)

echo.
echo Clone complete.
echo Move your website files into this folder:
echo %~dp0github-portfolio
echo Then move this BAT file into that folder and run it again.
echo Do not overwrite the .git folder.
pause
exit /b 0

:existing_repo
echo Checking for changes...
git add -A
if errorlevel 1 (
  echo ERROR: Could not stage files.
  pause
  exit /b 1
)
git diff --cached --quiet
if not errorlevel 1 goto no_changes

git commit -m "Update portfolio"
if errorlevel 1 (
  echo ERROR: Commit failed. Check Git name/email or the message above.
  pause
  exit /b 1
)

for /f "delims=" %%B in ('git branch --show-current') do set branch=%%B
if "%branch%"=="" (
  echo ERROR: Could not detect the current branch.
  pause
  exit /b 1
)
echo Uploading changes to branch %branch%...
git push -u origin "%branch%"
if errorlevel 1 (
  echo.
  echo ERROR: Push failed. Check internet, GitHub authentication, and repository permissions.
  pause
  exit /b 1
)
echo.
echo SUCCESS: Changes pushed to GitHub.
echo GitHub Pages may take a few minutes to publish.
pause
exit /b 0

:no_changes
echo No new changes found. Nothing needs to be uploaded.
pause
exit /b 0
