const fs = require("fs");


function generatePage() {
  const pageHTML = `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
      integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">
    <title>Team Profile</title>
  </head>

  <body>
    <nav class="navbar navbar-dark bg-danger mb-5">
      <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
    </nav>
    <div class="col-12 col-md-6 justify-space-evenly">
    <div class="container">
      <div class="row">
  `;
  fs.writeFile("./dist/index.html", pageHTML, err => {
    if (err) {
      console.log(err)
    }
  })
};




module.exports = generatePage;