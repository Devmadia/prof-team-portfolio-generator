const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        // introduce office number
        this.officeNumber = officeNumber;
    }

    // office number
    getOfficeNumber() {
        return `Office Number: ${this.officeNumber}`;
    }

    // reassign employee role as Manager
    getRole() {
        return `<i class="fas fa-mug-hot mr-2 role-icon"></i>MANAGER`;
    }
}

module.exports = Manager;