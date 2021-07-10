const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./src/generateMarkdown');
const Manager = require ('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');

function addManager() {
    inquirer.prompt ([
        {
            type: 'input', 
            name: 'id',
            message: "What is the Manager's Id?"
        },
        {
            type: 'input',
            name: "name",
            message: "Please enter the Manager's Name"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Managers Email?"

        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the Managers Office Number?"
        },
    ]).then((response) => {
        let newManager = new Manager(response.id, response.name, response.email, response.officeNumber);
        console.log(newManager);
    })
}

addManager();
