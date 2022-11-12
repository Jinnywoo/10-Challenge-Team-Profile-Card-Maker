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
function promptIntern(){
    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is the Intern's name?`,
                name: 'internName',
            },
            {
                type: 'input',
                message: `What is the Intern's id number?`,
                name: 'internId',
            },
            {
                type: 'input',
                message: `What is the Intern's email?`,
                name: 'internEmail',
            },
            {
                type: 'input',
                message: `What is the Interns's school?`,
                name: 'internSchool',
            },
        ])
        .then((response) => {
            var intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
            employees.push(intern);

            choicePrompts();
})
}

function choicePrompts(){
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Would you like to add another team member?',
                choices: ['Engineer', 'Intern', 'No'],
                name: 'addEmployee'
            },
        ])
        .then((response)=>{
            if (response.addEmployee === 'Engineer'){
                promptEngineer();
            }else if(response.addEmployee === 'Intern'){
                promptIntern();
            }else{
                generateHTML();
            }
        })
}