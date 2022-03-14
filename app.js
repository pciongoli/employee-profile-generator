const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let teammate = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// need to make prompt that can run for each employee type to keep code DRY
// function promptManager() {
//     inquirer    
//     .prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "Please eneter the name of the employee."

//         },
//         {
//             type: "input",
//             name: "id",
//             message: "Please eneter the id of the employee."
            
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "Please eneter the employee's email."
            
//         },
//         {
//             type: "input",
//             name: "officeNumber",
//             message: "Please enter team manager's office number."
//         }
//     ])
//     // need to call render to renderManager answers
//     .then((answers) => {
//         render(answers.name)
//     })
//     .then(employeePrompt)
// }

// prompt to select type of employee to add, or end the app and generate team portfolio


function employeePrompt() {
    inquirer
    .prompt ([
        {
            type: "list",
            name: "role",
            message: "Please select whether you would like to add an employee.",
            choices: ["Manager", "Engineer", "Intern", "No. Please finish my profile."]
        }
        
    ])

    // if manager role is selected then prompt for github user-name
    .then((answer) => {
        if (answer.role === "Manager") {

            return inquirer
            .prompt ([
                {
                    type: "input",
                    name: "name",
                    message: "Please eneter the name of the manager."
        
                },
                {
                    type: "input",
                    name: "id",
                    message: "Please eneter the id of the manager."
                
                },
                {
                    type: "input",
                    name: "email",
                    message: "Please eneter the managers's email."
                    
                },
                {
                    type: "input",
                    name: "officeNumber",
                    message: "Please enter team manager's office number."
                }
            ])
            // need to renderManager
            .then((answer) => {
                const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
                teammate.push(manager);
                console.log(teammate)
            })
            .then(employeePrompt)
        } 


        else if (answer.role === "Engineer") {

            return inquirer
            .prompt ([
                {
                    type: "input",
                    name: "name",
                    message: "Please eneter the name of the team engineer."
        
                },
                {
                    type: "input",
                    name: "id",
                    message: "Please eneter the id of the team engineer."
                    
                },
                {
                    type: "input",
                    name: "email",
                    message: "Please eneter the team engineer's email."
                    
                },
                {
                    type: "input",
                    name: "github",
                    message: "Please enter team engineer's GitHub user-name."
                }
            ])
            // need renderEngineer
            .then((answer) => {
                const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
                teammate.push(engineer);
                console.log(teammate)
            })
            .then(employeePrompt)
        } 

        // if intern is selected prompt for school
        else if (answer.role === "Intern") {

            return inquirer
            .prompt ([
                {
                    type: "input",
                    name: "name",
                    message: "Please eneter the name of the team intern."
        
                },
                {
                    type: "input",
                    name: "id",
                    message: "Please eneter the id of the team intern."
                    
                },
                {
                    type: "input",
                    name: "email",
                    message: "Please eneter the team intern's email."
                    
                },
                {
                    type: "input",
                    name: "school",
                    message: "Please enter the name of the team intern's school."
                }
            ])
            // need renderIntern
            .then((answer) => {
                const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
                teammate.push(intern);
                console.log(teammate)
            })
            .then(employeePrompt);
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
employeePrompt()


    // .then(employeePrompt => {
    //     return render
    // })


// HINTS

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee! 

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```