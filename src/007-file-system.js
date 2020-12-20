// Read data from existing files, update and write new data. 
// Here will be  reading ../config.json
const fs = require('fs');
const path = require('path');

// Example  of file read
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

let  file = path.join(`${__dirname}/../config/config.json`)
readJson(file).then(data => console.log(data));
*/


// Get new data from a file (./007-conf/source)
// Update (./007-conf/target) with data from above line
// Real world we will get the data from an api. 
const execFile      = require('./007-conf/getAddData');
const getUpdateData = execFile.getUpdateData;
const writeJson     = execFile.writeJson;


const args = process.argv.slice(2);
const stockId = args[0] || 2 // get stockId from customer 
const updateData = getUpdateData(stockId) // use number to get the stock from other file.

if (  updateData === undefined ) {
  console.log(`${stockId} not found`)
  process.exit(0)
}

const CONFIG_FILE   = 'target.json'
const newConfigFile = path.join(__dirname, './007-conf', CONFIG_FILE)

writeJson(newConfigFile, updateData)
  .then(msg => console.log(msg))
  .catch((err) => { throw err });

