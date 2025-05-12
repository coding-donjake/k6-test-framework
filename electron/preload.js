const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    show: false, // don't show immediately — wait until maximized
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
    minWidth: 1024,   // good minimum width
    minHeight: 640,   // good minimum height (16:10-ish)
  });

  // Load the Vite dev server in development
  win.loadURL('http://localhost:5173');

  // Maximize the window when it's ready, then show it
  win.once('ready-to-show', () => {
    win.maximize();
    win.show();
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
