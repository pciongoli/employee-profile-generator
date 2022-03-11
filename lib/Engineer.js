// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('../lib/Employee');

// Need to extend the Employee class
class Engineer extends Employee {

    constructor (name, id, email) {
        super(name, id, email, github)
        // overrides the constructor parameters
        this.github = github;
        this.status = "Engineer";
    }

    // get Github username via getGithub()
    getGithub() {
        return this.github;
    }

}

module.exports = Engineer;