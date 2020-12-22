const url = require('url');

const args = process.argv.slice(2);
const urlPassed = args.toString();

if ( urlPassed === undefined ) {
  console.error('Please pass a url')
  process.exit()
}

const {
  protocol, slashes, host, query, href
} = url.parse(urlPassed)

console.log(protocol,slashes, host, query, href)