// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

// Need to extend the Employee class
class Engineer extends Employee {

    // create constructor with additional property
    constructor (name, id, email, github) {
        super(name, id, email)
        // overrides the parents parameters
        this.github = github; 
        this.status = "Engineer";
    }

    // get Github username via getGithub()
    getGithub() {
        return this.github;
    }

}

module.exports = Engineer;