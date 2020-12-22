// When you run a script its treated as its won process.
// This process has its own  PID
// console.log(process.pid)

// process.on('exit', (code) => {
//   console.log(`The process has now finished  existing with code ${code}`)
// });

/*
Stdin :
  - User types something to terminal
  - Then process data or chunks to be processed. 
stdout :
  - Is what returned back to the user.
  - \n with process.stdout.write must be used.
*/

// process.stdout.write('Hello I am writing to standard output\n');

// process.stdout.write(`current working dir is ${process.cwd()}\n`);

// console.log(`This script has been running for ${process.uptime()}\n`)