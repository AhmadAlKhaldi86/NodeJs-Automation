const archiver = require('archiver');
const fs       = require('fs');
const path     = require('path');

const ZLIB_BEST_COMPRESSION = 9;
const zipPath               = path.join(__dirname, '008-conf/files.zip');

// create the configure a file to stream data to.
const output                = fs.createWriteStream(zipPath);
const archive               = archiver('zip', { zlib: {  level: ZLIB_BEST_COMPRESSION }});

// If file stream closes , run a call back to log some useful logs.
output.on('close'  ,() => {
  console.log(`Total Bytes: ${archive.pointer()}`);
  console.log(`archiving has now finished.`)
})

// catch for errors.
archive.on('error', (err) => { console.log(err)});

// Pipe the file stream to the archiver and append the files we want to add then complete the operation.
archive.pipe(output);
const textPath  = path.join(__dirname, '008-conf/copy.txt');
const logoPath  = path.join(__dirname, '008-conf/doc.png');

archive.append(fs.createReadStream(textPath), { name: 'content.txt' });
archive.append(fs.createReadStream(logoPath), { name: 'doc.png'});

archive.finalize();

