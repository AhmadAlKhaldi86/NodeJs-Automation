// Each template acts as skeleton for the application. 
// So if you have multiple applications you can have templates to start building each one.
// Need to choose one of the templates  to start building your application.
require('colors');
const rls     = require('readline-sync'); // Allows script  to have conversation with user such as asking questions. 
const path    = require('path');
const fsExtra = require('fs-extra'); // Allows the script to read/copy whole directories.

// Goal is to read the 0013/templates directory where all temps are saved then return an array of all available templates.
const app_templates  = '013-conf';
const No_Choice_Made = -1;

const template_dir   = path.join(__dirname, app_templates);
const templates      = fsExtra.readdirSync(template_dir);

// Allow the user to choose the application template to copy.
const index          = rls.keyInSelect(templates);
if (index === No_Choice_Made) {
  process.exit(0);
}

// Now ask the user what will the new application be called. 
const newApp = rls.question('What is the name of your game?', {
  limit: input => input.trim().length > 0,
  limitMessage: 'Please provide application name'
});

// if y it will proceed. 
const confirmCreateDir  = rls.keyInYN(`You entered '${newApp}',
  create dir with this name?`)

if (confirmCreateDir) {
  const template = templates[index];

  const src =  path.join(template_dir, template)
  const trg =  path.join(template_dir, 'dest/', newApp);

  fsExtra.copy(src,trg)
  .then(() => console.log(`Success created$ ${trg}` .blue))
  .catch(err => console.log(err));
} else {
  console.log('Aborted created a new game');
}