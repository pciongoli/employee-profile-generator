// TODO: Write code to define and export the Employee class
// add base properties and methods
class Employee {

    constructor (name, id, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = "Employee";
    }

    // Get name via getName()
    getName() {

        return this.name;
    }

    // Get id via getId()
    getId() {

        return this.id;
    }

    // Get email via getEmail()
    getEmail() {

        return this.email;
    }

    // getRole() should return \"Employee\"
    getRole() {

        return this.role;
    }

}

module.exports = Employee;