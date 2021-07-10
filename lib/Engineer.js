const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(id, name, email, githubUser) {
        super(id, name, email, )
        this.githubUser = githubUser;
        this.role = "Engineer"
    }


    getGithub() {
        return this.githubUser;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer