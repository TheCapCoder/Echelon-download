╔══════════════════════════════════════════════════════════╗
║              ECHELON OS — BUILD INSTRUCTIONS             ║
╚══════════════════════════════════════════════════════════╝

WHAT THIS FOLDER CONTAINS
──────────────────────────
  main.js        — Electron window controller
  preload.js     — Secure bridge for window controls
  package.json   — App config & build settings
  src/
    index.html   — The full Echelon OS app
    icon.png     — App icon (Linux)
    icon.ico     — App icon (Windows)

HOW TO BUILD (takes about 3–5 minutes total)
─────────────────────────────────────────────

STEP 1 — Install Node.js (skip if already installed)
  Download from: https://nodejs.org  (choose "LTS" version)
  Run the installer, click through defaults.
  Restart your terminal/command prompt after installing.

STEP 2 — Open a terminal in this folder
  Windows: Right-click inside this folder → "Open in Terminal"
           OR press Win+R, type cmd, press Enter,
           then type:  cd "C:\path\to\this\folder"
  Mac:     Right-click folder → "New Terminal at Folder"

STEP 3 — Install dependencies (one time only)
  Type this and press Enter:
    npm install

  Wait for it to finish (downloads ~200MB of Electron).

STEP 4 — Build the app for your platform

  ► Windows (.exe installer):
    npm run build-win

  ► Mac (.dmg):
    npm run build-mac

  ► Linux (.AppImage):
    npm run build-linux

STEP 5 — Find your app
  Look inside the  dist/  folder that gets created.

  Windows → "Echelon OS Setup 1.0.0.exe"
            Double-click to install. Creates a desktop
            shortcut and Start Menu entry automatically.

  Mac     → "Echelon OS-1.0.0.dmg"
            Open the DMG, drag the app to Applications.

  Linux   → "Echelon OS-1.0.0.AppImage"
            chmod +x it, then double-click to run.

OPTIONAL — Run without building first (instant preview)
  npm start
  This opens the app directly without packaging it.

NOTES
──────
• Your readiness calendar data saves automatically inside
  the app's data folder (not the HTML file itself), so it
  persists across updates as long as you keep the same
  install location.

• To update the app with a new version of index.html,
  just replace src/index.html and run the build command
  again.

• Windows may show a SmartScreen warning the first time
  you run the installer since the app isn't code-signed.
  Click "More info" → "Run anyway" to proceed.

══════════════════════════════════════════════════════════
