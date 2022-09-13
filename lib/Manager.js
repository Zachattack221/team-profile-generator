const Employee = require("./Employee");

class Manager extends Employee {
  constructor(officeNumber) {
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return inquirer.prompt([
      {
        name: 'office',
        input: 'number',
        message: 'What is the office number?',
      }
    ]).then(answers => {
      this.office = answers.office;
      this.getRole();
    })
  }
}

module.exports = Manager;
