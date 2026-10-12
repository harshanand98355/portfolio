@echo off
setlocal
title Update Portfolio on GitHub

REM Run this file from inside your GitHub repository folder.
cd /d "%~dp0"

echo.
echo ==========================================
echo    Update Portfolio on GitHub
echo ==========================================
echo.

where git >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed or is not on PATH.
    echo Install Git for Windows from https://git-scm.com/download/win
    echo Then close and reopen this window and try again.
    pause
    exit /b 1
)

git rev-parse --is-inside-work-tree >nul 2>&1
if errorlevel 1 (
    echo ERROR: This folder is not a Git repository.
    echo Put this .bat file inside your cloned GitHub repository folder.
    echo Do not use a folder downloaded as a ZIP; clone the repository instead.
    pause
    exit /b 1
)

echo Checking for changes...
git add -A
if errorlevel 1 (
    echo ERROR: Could not stage files.
    pause
    exit /b 1
)

git diff --cached --quiet
if not errorlevel 1 goto no_changes

echo.
echo Saving changes in Git...
git commit -m "Update portfolio"
if errorlevel 1 (
    echo.
    echo ERROR: Commit failed. Check the message above.
    echo You may need to configure your Git name/email or resolve an issue.
    pause
    exit /b 1
)

echo.
echo Uploading changes to GitHub...
git push origin main
if errorlevel 1 (
    echo.
    echo ERROR: Push failed.
    echo Check your internet connection, GitHub sign-in, and branch name.
    echo If your branch is not main, edit this file and replace "main" in the push command.
    pause
    exit /b 1
)

echo.
echo SUCCESS: Your code has been pushed to GitHub.
echo GitHub Pages may take a few minutes to publish the changes.
echo Website: https://harshanand98355.github.io/
pause
exit /b 0

:no_changes
echo.
echo No new changes found. Nothing needs to be uploaded.
pause
exit /b 0
