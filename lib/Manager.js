const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        // introduce office number
        this.officeNumber = officeNumber;
    }

    // reassign employee role as Manager
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;