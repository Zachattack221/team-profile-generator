const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(gitHub) {
    this.gitHub = gitHub;
  }

  getGithub() {
    return inquirer.prompt([
      {
        name: 'gitHub',
        message: 'What is the GitHub username?',
      }
    ]).then(answers => {
      this.gitHub = answers.gitHub;
      this.getRole();
    })
  }

}

module.exports = Engineer;
