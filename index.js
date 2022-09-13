const fs = require('fs');
const inquirer = require('inquirer');
// const Employee = require('./lib/Employee'); 

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const questions = require('./lib/questions');
const generateHtml = require('./src/page-template');
const questions = require('./lib/questions');

// create start() to initialize prompts


const prompt = inquirer.createPromptModule();

// prompt(questions).then((answers) => {
//         const template = generateHtml(answers);
//          console.log('testing');
// });

// prompt(coWorker).then((answers) => {
//     const template = generateHtml(answers);
//     if (!fs.existsSync('dist')) {
//         fs.mkdirSync('dist');
//     }
//           fs.writeFileSync('dist/team.html', template);
//     });

