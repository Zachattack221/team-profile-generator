const inquirer = require('inquirer');

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // Setting up functions to trigger prompts for each component
  getName() {
    return inquirer.prompt([
      {
        name: 'name',
        message: 'What is the employee\'s name?',
  }
]).then(answers => {
      this.name = answers.name;
      this.getId();
    });
  }

  getId() {
    return inquirer.prompt([
      {
        name: 'id',
        type: 'number'
        message: 'What is the employee ID number?',
      }
    ]).then(answers => {
      this.id = answers.id;
      this.getEmail();
    })
  }

  getEmail() {
    return inquirer.prompt([
  {
    name: 'email',
    message: 'What is the employee email?',
  }
]).then(answers => {
  this.email = answers.email;
  this.getRole();
})
  }

  getRole() {
    this.role = 'employee'
    console.log(this)
  }
}

module.exports = Employee;

// adding in componets to parent class Employee, each following sub-class will have separate defining componets, yet include all parameters of parent class