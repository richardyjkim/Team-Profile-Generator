const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

function Profile() {
  this.isManager = false;
  this.isEngineer = false;
  this.isIntern = false;
  this.managers = [];
  this.engineers = [];
  this.interns = [];
  this.currentEmployee;
};
