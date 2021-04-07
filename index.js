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
            generateProfile(newEmployee);
          } else {
            console.log(employees);
            generateProfile(newEmployee);
            closeHTML();
          }
        })
    })
}
const generateProfile = (answers) => {
  return new Promise((resolve, reject) => {
    const name = answers.getName();
    const role = answers.getRole();
    const id = answers.getId();
    const email = answers.getEmail();
    let profile = ""
    if (role === "Manager") {
      const number = answers.getNumber();
      profile =
        `<div class="col-6">
      <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header">${name}<br /><br />Manager</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email Address: ${email}</li>
          <li class="list-group-item">Office Phone: ${number}</li>
        </ul>
      </div>
    </div>`;
    } else if (role === "Engineer") {
      const github = answers.getGithub();
      profile =
        `<div class="col-6">
      <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header">${name}<br /><br />Engineer</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email Address: ${email}</li>
            <li class="list-group-item">GitHub: ${github}</li>
        </ul>
      </div>
    </div>`;
    } else if (role === "Intern") {
      const school = answers.getSchool();
      profile =
        `<div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
          <h5 class="card-header">${name}<br /><br />Intern</h5>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email Address: ${email}</li>
              <li class="list-group-item">School: ${school}</li>
          </ul>
        </div>
      </div>`;
    }

    fs.appendFile('./dist/index.html', profile, err => {
      if (err) {
        reject(err);

        return
      }
    });
    return resolve({
      ok: true,
      message: "Your team profiles have been added."
    });
  })
};

const closeHTML = () => {
  const closing =
    `</div>
  </div>
  
</body>
</html>`;
  fs.appendFile("./dist/index.html", closing, function (err) {
    if (err) {
      console.log(err);
    };
  });
  console.log("Your Team Profiles Have been created!");
}

addMember().then(generatePage);