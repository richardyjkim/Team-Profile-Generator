const fs = require ('fs');

function generatePage() {
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Team Profile</title>
  </head>

  <body>
    <nav class="navbar navbar-dark bg-dark mb-5">
      <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
    </nav>
    <div class="container">
      <div class="row">
        
       
      </div>
    </div>
  </body>
  `
};

const generateProfile = answers => {
  return new Promise((resolve, reject) => {
    const role = answers.getRole();
    const name = answers.getName();
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
    } else {
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
    fs.appendFile("./dist/index.html", profile, err => {
      if(err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File created!'
      })
    })
  });
};

module.exports = {generatePage, generateProfile};