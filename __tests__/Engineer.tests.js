const Engineer = require('../lib/Engineer');

// require from employee file
test('require information for Employee', () => {
    // consistent format as Employee with name, id, email
    const engineer = new Engineer('Audrey Max', 1, 'audreymax@somethingmail.com');

    expect(engineer).toHaveProperty('name');
    expect(engineer).toHaveProperty('id');
    expect(engineer).toHaveProperty('email');
});

// GitHub username
test('determine if engineering employee has a GitHub username', () => {
    const engineer = new Engineer('Audrey Max', 1, 'audreymax@somethingmail.com', 'GitAudreyMax');

    expect(engineer.github).toBe('GitAudreyMax');
});

// sets all employees with engineering role as Engineer
test('sets an employee role to engineer if applicable', () => {
    const engineer = new Engineer('Audrey Max', 1, 'audreymax@somethingmail.com', 'Engineer');

    expect(engineer.getRole()).toBe('Engineer');
});