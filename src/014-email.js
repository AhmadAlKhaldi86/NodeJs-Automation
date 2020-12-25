// This script will take two args from user Subject and body 
require('colors');
const conf       = require('./014-conf/conf.json');
const nodemailer = require('nodemailer');


const requiredArgs = 2;
const emailData    = process.argv.slice(2);
if (emailData.length !== requiredArgs) {
  console.log('Must provide two arguments as subject and body');
  process.exit()
}

const [subject, body] = emailData;
const { HOST, PORT, FROM_EMAIL, TO_MAIL} = conf;

// configure nodemailer 
const transporter = nodemailer.createTransport({
  host: HOST,
  port: PORT,
  secure: false,
})
const message = {
  from: FROM_EMAIL,
  to:   TO_EMAIL,
  subject,
  body,
  html: `<p>${body}</p>`
}

// send  email 
transporter.sendMail(message, (err, info) => {
  if (err) {
    console.log(err.message)
    return process.exit()
  }
  
  return console.log(info.message)
})