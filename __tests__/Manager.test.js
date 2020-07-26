const Manager = require('../lib/Manager');

// determine information for Manager based on Employee sheet
test('require information from Employee', () => {
    const manager = new Manager ('Ezekiel Max', 1, 'EzMax@somethingmail.com');

    expect(manager).toHaveProperty('name');
    expect(manager).toHaveProperty('id');
    expect(manager).toHaveProperty('email');
});

// check office number
test('check manager for an office number', () => {
    const manager = new Manager ('Ezekiel Max', 1, 'EzMax@somethingmail.com', 1401);

    expect(manager.officeNumber).toBe(1401);
});

// changes role from Employee to Manager
test('change employee role to manager if applicable', () => {
    const manager = new Manager ('Ezekiel Max', 1, 'EzMax@somethingmail.com', 1401);

    expect(manager.getRole()).toBe('Manager');
})