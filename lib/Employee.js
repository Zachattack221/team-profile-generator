const inquirer = require('inquirer');

// parent Employee class, contains three componets to be extened upon by Manager, Engineer, and Intern classes in their respective .js pages

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // Setting up functions 
  getName() {
    return this.name;
  }

  getId() {
    return this.id
  }

  getEmail() {
    return this.email
  }
  
  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;

