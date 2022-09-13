const fs = require('fs');
// const inquirer = require('inquirer');
const Employee = require('./lib/Employee'); 

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const questions = require('./lib/questions');
const generateHtml = require('./src/page-template');

const prompt = inquirer.createPromptModule();

prompt(Employee).then((team) => {
    const template = generateHtml(team);
    if (!fs.existsSync('dist')) {
        fs.mkdirSync('dist');
    }
          fs.writeFileSync('dist/team.html', template);
    });
