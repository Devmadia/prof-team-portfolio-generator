const Intern = require('../lib/Intern');

// determine information for intern
test('gather object information from Employee', () => {
    const intern = new Intern('Judas Max', 1, 'judasmax@somethingmail.com');

    expect(intern).toHaveProperty('name');
    expect(intern).toHaveProperty('id');
    expect(intern).toHaveProperty('email');
});

// check intern for school class value
test('check if intern has school name', () => {
    const intern = new Intern('Judas Max', 1, 'judasmax@somethingmail.com', 'U of T');

    expect(intern.getSchool()).toBe('U of T');
});

// set employee to Intern
test('set employee to intern where applicable', () => {
    const intern = new Intern('Judas Max', 1, 'judasmax@somethingmail.com', 'U of T');

    expect(intern.getRole()).toBe('Intern');
});