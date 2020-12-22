require('colors');


const messageType = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR:   'error'
}


const log = (message, type) => {
  let colorMessage;

  switch (type) {
    case messageType.ERROR:
      colorMessage = `[ERROR] ${message.red}`;
      break;
    case messageType.WARNING:
      colorMessage = `[ERROR] ${message.yellow}`;
      break;
    case messageType.SUCCESS:
      colorMessage = `[ERROR] ${message.green}`;
      break;
    default:
      colorMessage = `[info] ${message}`;
  }
  console.log(colorMessage)
}




module.exports  = {messageType,log}