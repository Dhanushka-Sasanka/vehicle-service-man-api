const db = require('../util/database');

module.exports = class Vehicle {

    constructor(vehicleID, vehicleType, regNo ,customerID) {
        this.vehicleID = vehicleID;
        this.vehicleType = vehicleType;
        this.regNo = regNo;
        this.customerID = customerID;
    }

     static fetchAllVehicles() {

         const query = "SELECT * FROM vehicle";
         return db.execute(query);

     }

     saveVehicle(){
        const query = "INSERT INTO vehicle VALUE(?,?,?,?)";
         return db.execute(query,[0,this.vehicleType ,this.regNo ,this.customerID]);
     }

    static removeVehicle(vehicleID){
        const query = "DELETE FROM vehicle WHERE vehicleID = ?";
        return db.execute(query,[vehicleID]);
    }
    static getVehicleById(vehicleID){
        const query = "SELECT * FROM vehicle WHERE vehicleID = ?";
        return db.execute(query,[vehicleID]);
    }
    static getVehicleByCustomerID(customerID){
        const query = "SELECT * FROM vehicle WHERE customerID = ?";
        return db.execute(query,[customerID]);
    }

     updateVehicle(){
        const query = "UPDATE vehicle set  vehicleType = ? ,regNo = ? WHERE vehicleID = ?";
        return db.execute(query,[this.vehicleType ,this.regNo , this.vehicleID]);
    }
};
