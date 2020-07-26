const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site.js');

// employee array
const employees = [];

// email and number regex
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const numRegEx = /^[1-9]*\d$/

/* array of questions for user */
// team building prompt
const teamBuild = () => {
    inquirer
            .prompt([
                // identify the manager
                {
                    type: 'input',
                    name: 'name',
                    message: "Please enter the team manager's name. (Required)",
                    validate: (nameInput) => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("Manager name is required to proceed.");
                            return false;
                        }
                    }
                },
                // manager ID
                {   type: 'input',
                    name: 'id',
                    message: "Please enter the manager's ID number.",
                    validate: (idInput) => {
                        if (idInput.match(numRegEx)) {
                            return true;
                        } else {
                            console.log("An ID number must be entered to continue.");
                            return false;
                        }
                    }
              },
              // manager email
              {
                    type: 'input',
                    name: 'email',
                    message: "Please enter the manager's email address.",
                    validate: (emailInput) => {
                        if (emailInput.match(emailRegEx)) {
                            return true;
                        } else {
                            console.log("A valid email address must be entered to continue.");
                            return false;
                        }
                    }
              },
              // manager office number
              {
                    type: 'input',
                    name: "offNumber",
                    message: "Please provide the manager's office number",
                    validate: (officeInput) => {
                        if (officeInput.match(numRegEx)) {
                            return true;
                        } else {
                            console.log("An office NUMBER is required to continue.")
                            return false;
                        }
                    }
              }
            ])
            .then((data) => {
                const {name, id, email, offNumber } = data;
                const manager = new Manager(name, id, email, offNumber);
                const managerDisplay = {
                    role: manager.getRole(),
                    name: manager.getName(),
                    id: manager.getID(),
                    email: manager.getEmail(),
                    number: manager.getOfficeNumber()
                };
                // pushes collected information into the employees array
                employees.push(managerDisplay);
                // runs the team building prompt again to add a new member
                choicesAvail();
            });
};

// following employee creation, user is provided additional options
const choicesAvail = () => {
    inquirer
            .prompt([
                // building the team by determining what the next team member role is
                {
                    type: 'list',
                    name: 'choiceList',
                    message: "Provide the next team member's position.",
                    choices: ['Engineer', 'Intern', 'None']
                }
            ])
            .then((data) => {
                // if Engineer is selected, run selectEngineer()
                if (data.choiceList === 'Engineer') {
                    selectEngineer();
                // if Intern is selected, run selectIntern()
                } else if (data.choiceList === 'Intern') {
                    selectIntern();
                } else {
                    const pageHTML = generatePage(employees);
                    return writeFile(pageHTML)
                                                .then((writeFileResponse) => {
                                                    console.log(writeFileResponse);
                                                })
                                                .then((copyFileResponse) => {
                                                    console.log(copyFileResponse);
                                                })
                                                .catch((err) => {
                                                    console.log(err);
                                                });
                }
            });
};

// engineer input
const selectEngineer = () => {
    inquirer
            .prompt([
                // provide input on engineer's name
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the engineer's name?",
                    validate: (nameInput) => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("An engineer must have a name...");
                            return false;
                        }
                    }
                },
                // engineer's ID number
                {
                    type: 'input',
                    name: 'id',
                    message: "What is the engineer's ID number?",
                    validate: (idInput) => {
                        if (idInput.match(numRegEx)) {
                            return true;
                        } else {
                            console.log("A number is required to continue.");
                            return false;
                        }
                    }
                },
                // engineer's email address
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the engineer's email address?",
                    validate: (emailInput) => {
                        if (emailInput.match(numRegEx)) {
                            return true;
                        } else {
                            console.log("Please enter the engineer's email address.");
                            return false;
                        }
                    }
                },
                // engineer's GitHub name
                {
                    type: 'input',
                    name: 'github',
                    message: "What is the engineer's GitHub name?",
                    validate: (githubInput) => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log("Provide the engineer's GitHub name to continue.");
                            return false;
                        }
                    }
                }
            ])
            .then((data) => {
                const { name, id, email, github } = data;
                const engineer = new Engineer(name, id, email, github);
                const engineerDisplay = {
                    role: engineer.getRole(),
                    name: engineer.getName(),
                    id: engineer.getID(),
                    email: engineer.getEmail(),
                    github: engineer.getGithub()
                };
                // pushes collected information into the employees array
                employees.push(engineerDisplay);
                // runs the team building prompt again to add a new member
                choicesAvail();
            });
};

// intern input
const selectIntern = () => {
    inquirer
            .prompt([
                // prompts for Intern name
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the intern's name?",
                    validate: (nameInput) => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("Provide the intern's name to continue.");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is the intern's ID number?",
                    validate: (idInput) => {
                        if (idInput.match(numRegEx)) {
                            return true;
                        } else {
                            console.log("Please be sure to enter a NUMBER.");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the intern's email address?",
                    validate: (emailInput) => {
                        if (emailInput.match(emailRegEx)) {
                            return true;
                        } else {
                            console.log("A valid email address must be entered.");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "What is the intern's school?",
                    validate: (schoolInput) => {
                        if (schoolInput) {
                            return true;
                        } else {
                            console.log("Provide the academic institution the intern belongs to.");
                            return false;
                        }
                    }
                }
            ])
            .then((data) => {
                const { name, id, email, school } = data;
                const intern = new Intern(name, id, email, school);
                const internDisplay = {
                    role: intern.getRole(),
                    name: intern.getName(),
                    id: intern.getID(),
                    email: intern.getEmail(),
                    school: intern.getSchool()
                };
                employees.push(internDisplay);
                choicesAvail();
            });
};

// initialization
console.log('You will be prompted to enter the details of your team in a moment.')
teamBuild();