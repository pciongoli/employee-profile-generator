const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// need to make prompt that can run for each employee type to keep code DRY
function promptEmployee() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Please eneter the name of the employee."

        },
        {
            type: "input",
            name: "id",
            message: "Please eneter the id of the employee."
            
        },
        {
            type: "input",
            name: "email",
            message: "Please eneter the employee's email."
            
        }
    ])
    .then((answers) => {
        console.log(answers);
    })
    .then(promptManager)
}


// Prompt to add officeNumber to team manager
function promptManager() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter the team manager's Office Number (#)."
        }
        
    ])
    .then((answers) => {
        console.log(answers);
    })
    .then(employeePrompt)
}


// prompt to select type of employee to add, or end the app and generate team portfolio
function employeePrompt() {
    inquirer
    .prompt ([
        {
            type: "list",
            name: "role",
            message: "Please select whether you would like to add an employee.",
            choices: ["Engineer", "Intern", "No. Please finish my profile."]
        }
        
    ])
    

    // if engineer role is selected then prompt for github user-name
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


        // if intern is selected prompt for school
        else if (answer.role === "Intern") {

            return inquirer
            .prompt ([
                {
                    type: "input",
                    name: "school",
                    message: "Please enter the name of the team intern's school."
                }
            ])
            .then((answer) => {
                console.log(answer)
                employeePrompt();
            })
        } 


        // if prompt to finish portfolio is selected, end the process
        else {
            console.log("Your employee portfolio is complete!")
            console.log(answer.role)
            return;
        }

    })

}

// call for employee prompt
promptEmployee();