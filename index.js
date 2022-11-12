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