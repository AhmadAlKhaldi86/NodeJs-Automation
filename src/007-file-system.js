// Read data from source file, Write new data to target file. 

// First Example we will be just reading from a file ../007/conf/target
const fs = require('fs');
const path = require('path');

// Example of file read
/*
const readJson = file => new Promise((resolve, reject) => {

    fs.readFile(file, {encoding: 'UTF-8'}, 
    (err, data) => {
      
      if (err) {
        reject(err)
      }

      resolve(JSON.parse(data))
    })
  })

let file = path.join(`${__dirname}/./007-conf/source.js`)
readJson(file).then(data => console.log(data));
*/

/*
// Get new data from a file (./007-conf/source)
// Update (./007-conf/target) with data from above line
// Real world we will get the data from an api. here getting it from a file. 
const execFile      = require('./007-conf/getAddData');
const getUpdateData = execFile.getUpdateData; // Gets stick data from source by id
const writeJson     = execFile.writeJson;     // Writes data to target


const args = process.argv.slice(2);
const stockId = args[0] || 2 // get stockId from customer 
const updateData = getUpdateData(stockId)

if (  updateData === undefined ) {
  console.log(`${stockId} not found`)
  process.exit(0)
}

const CONFIG_FILE   = 'target.json'
const newConfigFile = path.join(__dirname, './007-conf', CONFIG_FILE)

writeJson(newConfigFile, updateData)
  .then(msg => console.log(msg))
  .catch((err) => { throw err });
*/