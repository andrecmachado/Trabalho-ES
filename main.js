const electron = require( "electron" );
const { app, BrowserWindow } = electron;

let mainWindow = null;

app.on( "window-all-closed", () => {
    if ( process.platform !== "darwin" ) {
        app.quit();
    }
} );

app.on( "ready", function() {
    mainWindow = new BrowserWindow( { width: 800, height: 600 } );
    mainWindow.loadURL( `file://${ __dirname }/index.html` );

    mainWindow.on( "closed", function() {
        mainWindow = null;
    } );
} );