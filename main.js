// main.js
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

// Error Handling
process.on('uncaughtException', (error) => {
    console.error("Unexpected error: ", error);
});
function createWindow() {
    Menu.setApplicationMenu(null);
    // const win = new BrowserWindow({
    //     width: 800,
    //     height: 600,
    //     webPreferences: {
    //         preload: path.join(__dirname, 'preload.js'),
    //         contextIsolation: true,
    //         enableRemoteModule: false,
    //     }
    // });
    // win.loadURL(
    //     url.format({
    //         pathname: path.join(__dirname, `/dist/arabized-coptic/browser/index.html`),
    //         protocol: "file:",
    //         slashes: true,
    //     })
    // );
  win = new BrowserWindow({width: 800, height: 600});
  win.loadFile('dist/arabized-coptic/browser/index.html');

}
// App Lifecycle
app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});