var remote = require('remote');
var app = remote.require('app');
var BrowserWindow = remote.require('browser-window');
var dialog = remote.require('dialog');

function hello(){
	var options = {
		title: 'ダイアログのタイトル',
		type: 'info',
		buttons: ['OK', 'Cancel'],
		message: 'メッセージ',
		detail: 'hello'
	};
	var win = BrowserWindow.getFocusedWindow();
	dialog.showMessageBox(win, options);
}