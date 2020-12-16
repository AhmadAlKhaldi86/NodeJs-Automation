const url = require('url');

const args = process.argv.slice(2);

console.log(args)
const urlPassed = args.toString()
console.log(urlPassed)

if ( urlPassed === undefined ) {
  console.error('Please pass a url')
  process.exit()
}

const {
  protocol, slashes, host, query, href
} = url.parse(urlPassed)

console.log(protocol,slashes, host, query, href)