// querystring takes an object of key values and turn it into url search path
const querystring = require('querystring');

/*
const apiBaseUrl = 'https://jira.ford.com/search?jql='

const jqlParam   = {
  assignee   : 'shaun.stone',
  startAt    : 2,
  maxResults : 2  
}

const apiUrl = `${apiBaseUrl}"${querystring.stringify(jqlParam)}"`

console.log(apiUrl)
*/
// You can also take a url and split it
const URL = 'https://persons?myName=Ahmad&myAge=33'

const parsedUrl =  querystring.parse(URL.substr(URL.indexOf('?') + 1));

console.log(parsedUrl)