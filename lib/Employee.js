const inquirer = require('inquirer');

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

// const coWorker = new Employee();
// coWorker.getName();

module.exports = Employee;

// adding in componets to parent class Employee, each following sub-class will have separate defining componets, yet include all parameters of parent class