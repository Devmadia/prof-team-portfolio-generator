// require information from Employee.js
const Employee = require('../lib/Employee.js');

// check that it create and return name, id, email properties
test('creates an employee object', () => {
    const employee = new Employee('Ava Max', 1, 'avamax@somethingmail.com');

    expect(employee.name).toBe('Ava Max');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('avamax@somethingmail.com');
});

// check for employee's name
test("checks for an employee's name", () => {
    const employee = new Employee('Ava Max', 1, 'avamax@somethingmail.com');

    expect(employee.getName()).toBe('Ava Max');
});

// check for employee ID
test("checks for an employee's ID", () => {
    const employee = new Employee('Ava Max', 1, 'avamax@somethingmail.com');

    expect(employee.getID()).toBe(1);
})

// check for employee's email
test("checks for an employee's email address", () => {
    const employee = new Employee('Ava Max', 1, 'avamax@somethingmail.com');

    expect(employee.getEmail()).toBe('avamax@somethingmail.com');
})

// check for employee's role
test("checks for an employee's role", () => {
    const employee = new Employee('Ava Max', 1, 'avamax@somethingmail.com');

    expect(employee.getRole()).toBe('Employee')
})