import * as electron from 'electron'; 
import {remote} from 'electron'; 
const app = remote.app;
const BrowserWindow = remote.BrowserWindow;
const dialog = remote.dialog;

function hello(){
	var options: Electron.ShowMessageBoxOptions = {
		title: 'ダイアログのタイトル',
		type: 'info',
		buttons: ['OK', 'Cancel'],
		message: 'メッセージ',
		detail: 'hello'
	};
	var win = BrowserWindow.getFocusedWindow();
	dialog.showMessageBox(win, options);
}
