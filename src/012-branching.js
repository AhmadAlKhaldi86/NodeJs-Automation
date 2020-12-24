// Here we will create a  script to create a  branch from master
// Once the session complete , you  can delete the cloned repo. 
// readLineSync 
require('colors');
const path      = require('path');
const shell     = require('shelljs');
const rls       = require('readline-sync');

const { repositories } = require('./012-conf/conf');
const { readlinkSync } = require('fs');
const { repo, master}  = repositories;

// clone 
const cloneRepoDest  = path.join(__dirname, './012-conf')
shell.cd(cloneRepoDest);
console.log(`cloning ${repo} to ${cloneRepoDest}`.green);
shell.exec(`git clone ${repo} --progress`);

// pull latest
const branchRepoName  = repo.substring(repo.lastIndexOf('/'));
const branchRepoDest  = path.join(cloneRepoDest, branchRepoName);
shell.cd(branchRepoDest);
shell.exec(`git checkout ${master}`);
shell.exec(`git pull origin ${master}`);

// create new branch by asking user branch name
const branchName = rls.question('What is the branch name', {
  limit: answer => answer.trim().length > 0,
  limitMessage:  'Please Enter a branch'
});
shell.exec(`git checkout -b ${ranchName}`);