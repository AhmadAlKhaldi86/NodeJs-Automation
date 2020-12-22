const fs              = require('fs');
const readline        = require('readline');
const {stdin, stdout} = require('process');
const path            = require('path');

// Clean after your self function. close the interface and drop the stdin.
const onProjectInput = (name) => {
  interfaceInstance.close();
  stdin.destroy();
  createProjectDir(name)
}

const interfaceInstance = readline.createInterface(stdin,stdout);
// Ask the user a question(output), Get an answer(Input) to the process. 
interfaceInstance.question('What is the name of your project?', onProjectInput);

// Create project Dir function. Gets input, trim it, errorHandle, create the dir.
const createProjectDir = (enterName) => {
  const name = enterName.trim();

  if (name === '') {
    console.log(`Cannot create a project without a name`)
    process.exit()
  }

  const projectPath = path.join(__dirname, name);
  if (fs.existsSync(projectPath)) {
    console.log(`${name} already exists`)
    process.exit()
  }

  console.log(`Creating dir ${name}`)
  fs.mkdirSync(projectPath);
}
