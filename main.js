
import {app, BrowserWindow} from 'electron';

// window를 전역 객체로 유지해야 GC를 피함
let win;


const createWindow = () => {
	win = new BrowserWindow({width:800, height:600});
	win.loadURL(`file://${__dirname}/app/index.html`);

	if(process.env.NODE_ENV === 'development'){
		win.webContents.openDevTools();
	}
	win.on('closed' , () => {
		win = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if(process.platform !== 'darwin'){
		app.quit();
	}
});

app.on('activate', () => {
	if(win === null){
		createWindow();
	}
});