# cordova-framework7
Cordova with Framework7 bootstrap

Initial repository. Working in progress. Feel free to participate.

Short instructions.


Installation:
I assume you already have cordova in your environment and know how to use it.

1. Clone and checkout repository, init submodule if not inited (files should be visible in app/Framework7).
2. cd to repository repo and:
2.1 npm i

Usage example:
To serve ios theme via browser simply run "gulp serve --platform=ios". Gulp will create src files, move them to www folder and run node server with your app.

Dev notes:
The purpose of the app is to separate (some?) development files (less, js) for android and ios but still copy to www only those which are required for platform on build/release stage.
Main development process should be done inside app/ folder. However, index.js and index.css file from cordova is not changes in case you need it.

Current idea is to create new Framework7 instance inside app, so the app2webview layer will be separated from the Framework7 controllers. 
This might me changed in the future.



