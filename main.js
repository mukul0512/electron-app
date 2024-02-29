const {app, BrowserWindow} = require('electron');

function createWindow() {
    const wind = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    wind.loadFile("index.html")
}

app.whenReady().then(createWindow);