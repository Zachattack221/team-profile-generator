const Employee = require("./Employee");

class Intern extends Employee {
  constructor(school) {
    this.school = school;
  }

  getScool() {
    return inquirer.prompt([
      {
        name: 'school',
        message: 'What is the school attended?',
      }
    ]).then(answers => {
      this.school = answers.school;
      this.getRole();
    })
  }

}

module.exports = Intern;
