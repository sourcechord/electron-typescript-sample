import * as electron from 'electron'; 
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
electron.crashReporter.start();

// メインウィンドウの参照をグローバルに持っておく。
var mainWindow: GitHubElectron.BrowserWindow = null;

// すべてのウィンドウが閉じられた際の動作
app.on('window-all-closed', function() {
  // OS X では、ウィンドウを閉じても一般的にアプリ終了はしないので除外。
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  // 新規ウィンドウ作成
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  // index.htmlを開く
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // ウィンドウが閉じられたら、ウィンドウへの参照を破棄する。
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});