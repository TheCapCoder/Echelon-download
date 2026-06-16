const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    minWidth: 1024,
    minHeight: 768,
    maxWidth: 1024,
    maxHeight: 768,
    resizable: false,
    title: 'Echelon OS',
    backgroundColor: '#02040a',
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      partition: 'persist:echelon'
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'));
  mainWindow.setMenuBarVisibility(false);

  mainWindow.on('closed', () => { mainWindow = null; });
}

// IPC handlers for frameless window controls
ipcMain.on('win-close',    () => { if(mainWindow) mainWindow.close(); });
ipcMain.on('win-minimize', () => { if(mainWindow) mainWindow.minimize(); });

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
