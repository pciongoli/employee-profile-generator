// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

// Intern needs to extend the Employee class
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        
        // overrides the parents parameters
        this.school = school;
        this.role = "Intern";
    }

    getSchool() {
        return this.school;
    }

}

module.exports = Intern;