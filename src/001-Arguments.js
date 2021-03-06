// const args = process.argv;
// console.log(args)

/*
node src/001-Arguments.js "Ahmad"
[ '/usr/local/bin/node',
  '/Users/aalkhald/Documents/dev/nodeautomation/src/001-Arguments.js',
  'Ahmad' ]
*/

// Pass a name to the script. Capture it and print a good day to the user.
const args = process.argv.slice(2)
const name = args[0];

if ( name  === undefined) {
  console.error('please pass a name')
  process.exit()
}

console.log(`Good day ${name}`)
