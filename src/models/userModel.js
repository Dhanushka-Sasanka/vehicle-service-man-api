const db = require('../util/database');

module.exports = class User {

    constructor(email, password, userType, firstName , lastName,contact,nic) {
        this.email = email;
        this.password = password;
        this.userType = userType;
        this.firstName = firstName;
        this.lastName = lastName;
        this.contact = contact;
        this.nic = nic;
    }

    static fetchAllUsers() {

        const query = "SELECT * FROM users";
        return db.execute(query);

    }

    saveUser(){
        const query = "INSERT INTO users(email, password, userType, firstName , lastName,contact,nic) VALUE(?,?,?,?,?,?,?)";
        return db.execute(query,[this.email,this.password,this.userType ,this.firstName, this.lastName, this.contact, this.nic]);
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
