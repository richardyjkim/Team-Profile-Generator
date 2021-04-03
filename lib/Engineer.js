const Employee = require("./Employee");

class Engineer extends Employee {
  constructor (name, id, email, github) {
    super(name, id, email);
    rhis.github = github
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github
  }
}

module.exports = Engineer;