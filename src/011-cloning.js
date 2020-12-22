// Automatically Clone a repo by help of external dependency called shelljs
// config.json file will include all repos that our project will need.
require('colors');
const path           = require('path');
const shell          = require('shelljs');
const {repositories} = require('./011-conf/config.json');

const repoDirectory  = path.join(__dirname, './011-conf/');

function cloneRepo(repoDirectory, repoList = []) {

  const repoCount = repoList.length
  console.log(repoCount)
  if (!repoDirectory || repoCount == 0) {
    console.log('Invalid repoPath or repoList');
    return
  }

  console.log(`=== Cloning repo to: ${repoDirectory}`.blue);

  shell.cd(repoDirectory);
  repoList.forEach((repoUrl,index) => {
    console.log(`cloning ${index +1} of ${repoCount}`.cyan);
    shell.exec(`git clone ${repoUrl} --progress`);
  })

  console.log('completed cloning of the repo'.green);
}

cloneRepo(repoDirectory,repositories);