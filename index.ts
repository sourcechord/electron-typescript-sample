import * as electron from 'electron'; 
import {remote} from 'electron'; 
const app = remote.require('app');
const BrowserWindow = remote.require('browser-window');
const dialog = remote.require('dialog');

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