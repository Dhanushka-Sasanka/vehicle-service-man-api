const db = require('../util/database');

module.exports = class User {

    constructor(email, password, userType) {
        this.email = email;
        this.password = password;
        this.userType = userType;
    }

    static fetchAllUsers() {
        // let dbs = require('../util/database');
        const query = "SELECT * FROM users";
        return db.execute(query);

    }

    saveUser(){
        const query = "INSERT INTO users(email,password,userType) VALUE(?,?,?)";
        return db.execute(query,[this.email,this.password,this.userType]);
    }

    static removeUser(userID){
        // const query = "DELETE FROM employee WHERE emp_id = ?";
        // return db.execute(query,[employeeID]);
    }
    static getUserByEmail(email){
        const query = "SELECT * FROM users WHERE email = ?";
        return db.execute(query,[email]);
    }



};
