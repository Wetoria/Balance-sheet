// 引入electron并创建一个Browserwindow
const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
// const url = require('url');
// const path = require('path');


// 保持window对象的全局引用,避免JavaScript对象被垃圾回收时,窗口被自动关闭.
let mainWindow;

function createWindow() {
  // 创建浏览器窗口,宽高自定义具体大小你开心就好
  mainWindow = new BrowserWindow({
    width: 800,
    height: 700,
    minHeight: 300,
    minWidth: 300,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    },
  });

  const isDevelopment = !!process.env.ELECTRON_START_URL;

  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, './index.html'),
    protocol: 'file:',
    slashes: true,
  });
  mainWindow.loadURL(startUrl);

  // 打开开发者工具，默认不打开
  if (isDevelopment) {
    mainWindow.webContents.openDevTools();
  }

  // 关闭window时触发下列事件.
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.on('ready', createWindow);

// 所有窗口关闭时退出应用.
app.on('window-all-closed', () => {
  // macOS中除非用户按下 `Cmd + Q` 显式退出,否则应用与菜单栏始终处于活动状态.
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // macOS中点击Dock图标时没有已打开的其余应用窗口时,则通常在应用中重建一个窗口
  if (mainWindow === null) {
    createWindow();
  }
});
