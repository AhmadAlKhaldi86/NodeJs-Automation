// read data from updateData.js to be able to use it to update config.json
const fs = require('fs');
const updateData    = require('./updateData');

// Array search
const getUpdateData = (stockId) => {
  var result = updateData.filter(doc => doc['stockId'] == stockId)
  console.log(result)
  return result
}

// if it was an object
// const getUpdateData = (stockId) => {
//   if (updateData['stockId'] == stockId)
//     return updateData
// }

// Write data to a file with new content
const JSON_WHITESPACE = 4;
const writeJson = (file, contents) => new Promise((resolve,reject) => {
  fs.writeFile(
    file, 
    JSON.stringify(contents, null, JSON_WHITESPACE), 
    (err) => { 
      if (err) { reject(err) } 
    
      resolve(`${file} written`)
    })
})

module.exports = {
  getUpdateData,
  writeJson
}