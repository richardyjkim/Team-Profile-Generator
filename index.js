const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employees = [];

addMember = () => {
  inquirer.prompt([{
    type: 'text',
    name: 'name',
    message: "What is the employee's name?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter current Employeer's name!");
        return false;
      }
    }
  },

  {
    type: 'text',
    name: 'id',
    message: "What is the employee's id?",
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter current Employeer's id!");
        return false;
      }
    }
  },
  {
    type: 'text',
    name: 'email',
    message: "What is the employee's E-mail address?",
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter current Employeer's E-mail address!");
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'role',
    message: "What is this employee's current role?",
    choices: ["Manager", "Engineer", "Intern"]
  }]);
}