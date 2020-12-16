// Spawn new child process to handle execution of opening a  browser. 
// This  requires more memory for child and current  script can use. 
// Child process is created by a parent . In node by (fork,spawn,exec,execFille).
// Use exec when data  returned is small as the output is buffered then all result is passed to callback. 
// Use spawn to stream back data in chunks.
// Use execFile to execute a  file without using shell. 
// Use fork (variation of spawn) invokes a module that establishes communication channel to pass messages  between parent and child

const {platform}       = require('os');
const {exec}           = require('child_process');
const WINDOWS_PLATFORM = 'win32';
const osPlatform       = platform();
const args             = process.argv.slice(2);
const [url]            = args;

if ( url === undefined ) {
  console.error('Please pass a url')
  process.exit(0)
}

let command;

if ( osPlatform  === WINDOWS_PLATFORM ) {
  command  = `start microsoft edge:${url}`;
} else {
  command  = `open -a "Google Chrome" ${url}`;
}

console.log(`executing command ${command}`)
exec(command);

// node src/006-open.js "https://www.google.com"