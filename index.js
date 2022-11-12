const inquirer = require ('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let team =[];

function promptManager(){
    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is the Team Manager's name?`,
                name: 'managerName',
            },
            {
                type: 'input',
                message: `What is the Team Manager's id number?`,
                name: 'managerId',
            },
            {
                type: 'input',
                message: `What is the Team Manager's email?`,
                name: 'managerEmail',
            },
            {
                type: 'input',
                message: `What is the Team Manager's office number?`,
                name: 'managerOfficenumber',
            },
        ])
        .then((response) => {
            var manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficenumber);
            employees.push(manager);

            choicePrompts();
})
}
function promptEngineer(){
    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is the Engineer's name?`,
                name: 'engineerName',
            },
            {
                type: 'input',
                message: `What is the Engineer's id number?`,
                name: 'engineerId',
            },
            {
                type: 'input',
                message: `What is the Engineers's email?`,
                name: 'engineerEmail',
            },
            {
                type: 'input',
                message: `What is the Engineers's github?`,
                name: 'engineerGithub',
            },
        ])
        .then((response) => {
            var engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
            employees.push(engineer);

            choicePrompts();
})
}
function promptManager(){
    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is the Team Manager's name?`,
                name: 'managerName',
            },
            {
                type: 'input',
                message: `What is the Team Manager's id number?`,
                name: 'managerId',
            },
            {
                type: 'input',
                message: `What is the Team Manager's email?`,
                name: 'managerEmail',
            },
            {
                type: 'input',
                message: `What is the Team Manager's office number?`,
                name: 'managerOfficenumber',
            },
        ])
        .then((response) => {
            var manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficenumber);
            employees.push(manager);

            choicePrompts();
})
}