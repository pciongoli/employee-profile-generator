const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choice = require("inquirer/lib/objects/choice");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

promptManager = () => {
    inquirer
    .prompt([
        { 
            type: "input",
            name: "name",
            message: "Please enter the team managers's name."
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the team managers's id."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the team managers's email."
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter the team manager's Office Number (#)."
        }
        
    ])
    .then((answers) => {
        console.log(answers);
        employeePrompt();
    })
}

function employeePrompt () {
    inquirer
    .prompt ([
        {
            type: "list",
            name: "role",
            message: "Please select whether you would like to add an employee.",
            choices: ["Engineer", "Intern", "No. Please finish my profile."]
        }
        
    ])
    .then((answer) => {
        if (answer.role === "Engineer") {
            return inquirer
            .prompt ([
                {
                    type: "input",
                    name: "github",
                    message: "Please enter team engineer's GitHub user-name."
                }
            ])
            .then((answer) => {
                console.log(answer)
                employeePrompt();
            })
            
        } 
        else if (answer.role === "Intern") {
            console.log(answer)
            employeePrompt();
        } 
        else {
            console.log("Your employee portfolio is complete!")
            console.log()
            return;
        }
    })
}

promptManager();

