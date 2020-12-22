// Here we will be using colors to display errors in red, info in yellow, success in green. 
// No need require below to const, its loaded  and it extends String.prototype.
require('colors');
const  { log, messageType} = require('./009-conf/log');

// console.log('This is a success message' .green);
// console.log('This is an info message'   .yellow);
// console.log('This is an error message'  .red);

log('This is a success message', messageType.SUCCESS);
log('This is an info message',   messageType.WARNING);
log('This is an error message',  messageType.ERROR);
log('This is an log message');