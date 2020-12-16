// NodeJs can also dig into the hardware of the machine. 
const os = require('os')

const homeDir    = os.homedir();
const osPlatform = os.platform()
const cpuCores   = os.cpus();
const coreCount  = cpuCores.length;
const cpuModel  = cpuCores[0].model;

console.log(`Your home directory is ${homeDir}`)
console.log(`Your platform is ${osPlatform}`)
console.log(`Your cpuCores is ${cpuCores}`)
console.log(`Your coreCount is ${coreCount}`)
console.log(`Your cpuModel is ${cpuModel}`)