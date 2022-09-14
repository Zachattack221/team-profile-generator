module.exports = [
    {
        input: 'rawlist',
        name: 'role',
        message: 'What is your employee role?',
        choices: [
            'Manager',
            'Engineer',
            'Intern',
            'Exit',
        ]
    },

    {
        name: 'name',
        message: 'What is the employee\'s name?',
    },
    {
        name: 'id',
        type: 'number',
        message: 'What is the employee\'s ID number?',
    },
    {
        name: 'email',
        message: 'What is the employee\'s email?',
    },

    {
        name: 'gitHub',
        message: 'What is the GitHub username?',
    }


];
// if (answer.role === 'Exit') {
//     return 'Team Profile Created';
// }

// getRole(this.role)