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
         // let dbs = require('../util/database');
         const query = "SELECT * FROM employee";
         return db.execute(query);

     }

     saveEmployee(){
        const query = "INSERT INTO employee VALUE(?,?,?,?,?,?,?)";
         return db.execute(query,[this.employeeID ,this.employeeName ,this.employeeNic ,this.employeeMobile,this.employeePwd ,this.employeeType,this.employeeStatus]);
     }

    static removeEmployee(employeeID){
        const query = "DELETE FROM employee WHERE emp_id = ?";
        return db.execute(query,[employeeID]);
    }
    static getEmployeeById(employeeID){
        const query = "SELECT * FROM employee WHERE emp_id = ?";
        return db.execute(query,[employeeID]);
    }



};
