const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function addManager() {
    inquirer.prompt([
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
        let newEmployee = new Manager(response.id, response.name, response.email, response.officeNumber);

        const generateCard = generateHTML(newEmployee);
        fs.writeFileSync("./src/store.js", `\n${generateCard}`);
        console.log(newEmployee)

        addEmployee();
    })
}

addManager();

function addEmployee(){
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'employeeType',
                message: 'Which type of employee would you like to add to the team?',
                choices: ["Engineer", "Intern", "Finish"],
            },
        ]).then((response) => {
            if (response.employeeType === "Engineer") {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'id',
                            message: "What is the Engineer's Id?"
                        },
                        {
                            type: 'input',
                            name: "name",
                            message: "Please enter the Engineer's Name"
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "What is the Engineer's Email?"

                        },
                        {
                            type: 'input',
                            name: 'githubUser',
                            message: "What is the Engineers github user name?"
                        }
                    ]).then((response) => {
                        let newEmployee = new Engineer(response.id, response.name, response.email, response.githubUser)
                        const generateCard = generateHTML(newEmployee);
                        fs.appendFileSync("./src/store.js", `\n${generateCard}`);
                        console.log(newEmployee)
                        addEmployee();

                    })
            }
            else if (response.employeeType === "Intern") {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'id',
                            message: "What is the Intern's Id?"
                        },
                        {
                            type: 'input',
                            name: "name",
                            message: "Please enter the Intern's Name"
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "What is the Intern's Email?"

                        },
                        {
                            type: 'input',
                            name: 'school',
                            message: "What is the Intern's school?"
                        }
                    ]).then((response) => {
                        let newEmployee = new Intern(response.id, response.name, response.email, response.school)
                        const generateCard = generateHTML(newEmployee);
                        fs.appendFileSync("./src/store.js", `\n${generateCard}`);
                        console.log(newEmployee)
                        addEmployee();
                    });

            }
            else {
                console.log("Thank You! WE have created your team's profile")
            }
        })
}
