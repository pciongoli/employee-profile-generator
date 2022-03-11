// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

// Manager needs to extend the Employee class
class Manager extends Employee {

    // create constructor with additional property
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        // overrides the parents parameters
        this.officeNumber = officeNumber;
        this.status = "Manager";
    }
    // Get office number via getOffice()
    getOfficeNumber() {
        return this.officeNumber;
    }

}


module.exports = Manager;