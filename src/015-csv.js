// Process data in csv  format 
// Streams do not eat whale burger  at one time you will chunk it and process it. 
// if we just use fs.readFile to read million of records then it has to be loaded to memory at once
// Means bigger load, bigger download, long time ..

// Streams:
// readable act as the source
// writable act as the target
// duplex both read and write
// transform special duplex  where input goes into transformable stream and returned modified or  unchanged.  
// we wil use to external modules csv-parse , stream-transform 
require('colors');
const path       = require('path');
const { stdout } = require('process');
const parse      = require('csv-parse');
const transform  = require('stream-transform');
const fs         = require('fs');

const Delay      = 300; 
const csvFile    = path.join(__dirname, './015-conf/data.csv');
const parser     = parse({delimiter: ','});
const input      = fs.createReadStream(csvFile);

let iterator = 1;
const processData = (data, callback) => {

  const [id, sex, glucose, insulin, triglyc ] = data;
  let msg = `processing ${iterator} with ${id}`
  msg = (iterator % 2 ===0) ? msg.bgGreen : msg.bgCyan
  iterator +=1;
  
  setTimeout(() => {
    //'Processing data here'
    callback(null, `${msg}\n`);
  }, Delay)

};

const transformer = transform(processData);
input
  .pipe(parser)
  .pipe(transformer)
  .pipe(stdout)

