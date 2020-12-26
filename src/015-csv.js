// Process data in csv format 
// Streams do not eat whale burger at once , you will chunk it and process it. 
// If we just use fs.readFile to read million of records then it has to be loaded to memory at once
// Means bigger load, bigger download, long time ..

// Streams:
// readable act as the source : In this example we use fs.createReadStream for csv as source.
// writable act as the target : Example STANDOUT 
// duplex both read and write
// transform special duplex where input goes into transformable stream and returned modified or unchanged. We will use transform.(function)  
// we wil use to external modules csv-parse , stream-transform 


// The Process in this file 
// 1) Create read  stream 
// 2) Create a parser such as what is the delimiter
// 3) Create the processing function. This will be used by transform 
// 4) Pipe the result to standout.  


require('colors');
const path       = require('path');
const parse      = require('csv-parse');
const transform  = require('stream-transform');
const fs         = require('fs');
const { stdout } = require('process');

const Delay      = 1000; // not required just in this example to slowDown operation.
const csvFile    = path.join(__dirname, './015-conf/data.csv');
const input      = fs.createReadStream(csvFile);
const parser     = parse({delimiter: ','});

let iterator = 1;
const processData = (data, callback) => {

  const [id, sex, glucose, insulin, triglyc ] = data;
  let msg = `processing ${iterator} with ${id}`
  msg = (iterator % 2 === 0) ? msg.bgGreen : msg.bgCyan
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

