const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require("./src/page-template");
const fs = require("fs");


const employees = [];
const prompts = [];
const promptData = [
  {
    "type": 'text',
    "name": 'name',
    "message": "What is the employee's name?",
    "errorMessage": "Please enter current Employeer's name!",
  },
  {
    "type": 'text',
    "name": 'id',
    "message": "What is the employee's id?",
    "errorMessage": "Please enter current Employeer's id!",
  },
  {
    "type": 'text',
    "name": 'email',
    "message": "What is the employee's E-mail address?",
    "errorMessage": "Please enter current Employeer's email address!",
  },
  {
    "type": 'list',
    "name": 'role',
    "message": "What is this employee's current role?",
    "choices": ["Manager", "Engineer", "Intern"],
  },
];

// function that builds a prompt with prompdata defined above
buildPrompt = (promptData) => {
  prompt = {
    type: promptData["type"],
    name: promptData["name"],
    message: promptData["message"]
  };

  if (promptData["type"] == "text") {
    prompt["validate"] = (input) => {
      if (!input) {
        console.log(promptData["errorMessage"]);
      }
      return Boolean(input);
    }
  } else {
    prompt["choices"] = promptData["choices"];
  }
  return prompt;
}

addMember = () => {

  // build prompts for employees
  promptData.forEach(promptData => {
    prompts.push(buildPrompt(promptData));
  });

  return inquirer.prompt(prompts)
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
            // console.log(employees);
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
    let profile =
      `<div class="col-4">
        <div class="card mx-auto mb-3" style="width: 18rem">
          <h5 class="card-header text-white bg-info">${name}<br /><br />
          <i class="fas fa-user-circle"></i> ${role}</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email Address: ${email}</li>`;
    if (role === "Manager") {
      const number = answers.getNumber();
      profile = profile +
        `
        <li class="list-group-item">Office Phone: ${number}</li>
       `;
    } else if (role === "Engineer") {
      const github = answers.getGithub();
      profile = profile +
        `
        <li class="list-group-item">GitHub: ${github}</li>
       `;
    } else if (role === "Intern") {
      const school = answers.getSchool();
      profile = profile +
        `
        <li class="list-group-item">School: ${school}</li>
          `;
    }
    profile = profile +
      `</ul>
      </div>
    </div>`
      ;

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