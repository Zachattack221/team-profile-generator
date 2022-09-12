class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
}

module.exports = Employee;

// adding in componets to parent class Employee, each following sub-class will have separate defining componets, yet include all parameters of parent class