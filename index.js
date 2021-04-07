const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require("./src/page-template");
const fs = require("fs");


const employees = [];

addMember = () => {
  return inquirer.prompt([{
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
  }])
    .then(({ name, id, email, role }) => {
      let employeeRole = "";
      if (role === "Manager") {
        employeeRole = "Office number"
      } else if (role === "Engineer") {
        employeeRole = "Github"
      } else {
        employeeRole = "School"
      }
      inquirer.prompt([{
        type: 'text',
        name: 'employeeRole',
        message: `Please enter your Employee's ${employeeRole}`
      },
      {
        type: "list",
        name: "addEmployee",
        Message: "Anymore employee you would like to add?",
        choices: [
          "Add more",
          "No more"
        ]
      }])
        .then(({ employeeRole, addEmployee }) => {
          let newEmployee;
          if (role === "Manager") {
            newEmployee = new Manager(name, id, email, employeeRole);
          } else if (role === "Engineer") {
            newEmployee = new Engineer(name, id, email, employeeRole);
          } else {
            newEmployee = new Intern(name, id, email, employeeRole);
          }
          employees.push(newEmployee);
          if (addEmployee === "Add more") {
            addMember();
          } else {
            console.log(employees);
          }
        })
    })
}


addMember().then(generatePage);