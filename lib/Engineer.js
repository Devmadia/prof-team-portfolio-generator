const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email);
  
      this.github = github;
    }
  
    getGithub() {
      return `Github: <a href="https://github.com/${this.github}" target="_blank">${this.github}</a>`;
    }
    getRole() {
      return `<i class="fas fa-glasses mr-2 role-icon"></i>Engineer`;
    } 
}

module.exports = Engineer;