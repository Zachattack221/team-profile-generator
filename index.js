const fs = require('fs');
const inquirer = require('inquirer');
 

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateTeam = require('./src/page-template');
// const { inherits } = require('util');

// empty array to push completed team members to
possibleTeam = [];

function init() {

function createTeam() {
    inquirer.prompt ([
    {
        type: 'rawlist',
        name: 'role',
        message: 'What is your employee role?',
        choices: [
            'Manager',
            'Engineer',
            'Intern',
            'Exit - team complete',
        ]
        }]).then(function (userInput){
            switch(userInput.role) {
                case 'Manager':
                addManager();
                break;
                case 'Engineer':
                addEngineer();
                break;
                case 'Intern':
                addIntern();
                break;
                default: 
                createPage();
            }
        })
    }; 


function addManager() {
    inquirer.prompt ([
        {
        name: 'managerName',
        message: 'What is the Manager\'s name?',
        },
        {
            name: 'managerId',
            type: 'number',
            message: 'What is the Manager\'s ID number?',
        },
        {
            name: 'managerEmail',
            message: 'What is the Manager\'s email?',
        },
        {
            name: 'managerOffice',
            input: 'number',
            message: 'What is the Manager\'s office number?',
        },

    ]).then(answers =>{
        const manager = new Manager(answers.managerName,answers.managerId,answers.managerEmail,answers.managerOffice);
        possibleTeam.push(manager);
        createTeam()
    });
};
function addEngineer() {
    inquirer.prompt ([
        {
            name: 'engineerName',
            message: 'What is the Engineer\'s name?',
            },
            {
                name: 'engineerId',
                type: 'number',
                message: 'What is the Engineer\'s ID number?',
            },
            {
                name: 'engineerEmail',
                message: 'What is the Engineer\'s email?',
            },
                {
                    name: 'engineerGithub',
                    message: 'What is the Engineer\'s GitHub username?',
                }

    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName,answers.engineerId,answers.engineerEmail,answers.engineerGithub);
        possibleTeam.push(engineer);
        createTeam();
    });
};

function addIntern() {
    inquirer.prompt ([
        {
            name: 'internName',
            message: 'What is the Intern\'s name?',
            },
            {
                name: 'internId',
                type: 'number',
                message: 'What is the Intern\'s ID number?',
            },
            {
                name: 'internEmail',
                message: 'What is the Intern\'s email?',
            },
            {
                name: 'internSchool',
                message: 'What is the Intern\'s current school?',
            },


    ]).then(answers => {
        const intern = new Intern(answers.internName,answers.internId,answers.internEmail,answers.internSchool)
        possibleTeam.push(intern);
        createTeam();
    });
};
function createPage() {
    console.log('The team has successfully been created')

    fs.writeFileSync('dist/team.html',generateTeam(possibleTeam),'UTF8')
};

// generateHtml(answers);


createTeam();

};

init();
// create start() to initialize prompts




// const prompt = inquirer.createPromptModule();


// prompt(coWorker).then((answers) => {
    //     const template = generateHtml(answers);
    //     if (!fs.existsSync('dist')) {
        //         fs.mkdirSync('dist');
        //     }
        //           fs.writeFileSync('dist/team.html', template);
        //     });
        
        
        // prompt(questions).then((answers) => {
        //         const template = generateHtml(answers);
        //          console.log('testing');
        // });