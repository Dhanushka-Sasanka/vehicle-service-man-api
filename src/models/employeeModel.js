const db = require('../util/database');

module.exports = class Employee {

    constructor(employeeID, employeeName, employeeNic, employeeMobile, employeePwd, employeeType, employeeStatus) {
        this.employeeID = employeeID;
        this.employeeName = employeeName;
        this.employeeNic = employeeNic;
        this.employeeMobile = employeeMobile;
        this.employeePwd = employeePwd;
        this.employeeType = employeeType;
        this.employeeStatus = employeeStatus;
    }

    static fetchAllEmployees() {
        const query = "SELECT * FROM employee";
        return db.execute(query);

    }
}
