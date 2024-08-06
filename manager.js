const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, salary, title, manager, employees = []) {
        super(name, salary, title, manager);
        this.employees = employees
    }

    addEmployee(employee) {
        this.employees.push(employee)
    }
}


module.exports = Manager;
