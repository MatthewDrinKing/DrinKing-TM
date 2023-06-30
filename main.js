const { app, BrowserWindow } = require("electron");
require("./index.js");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
  });

  win.loadURL("http://localhost:8080/");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
  });
});
