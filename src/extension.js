// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json

    context.subscriptions.push(vscode.commands.registerCommand('imageOptimizer.losslessOptimization', losslessOptimization));
    context.subscriptions.push(vscode.commands.registerCommand('imageOptimizer.lossyOptimization', lossyOptimization));
}

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
    
}

exports.deactivate = deactivate;

function losslessOptimization() {
    console.log('Entered losslessOptimization function.');
}

function lossyOptimization() {
    console.log('Entered lossyOptimization function');
}