const db = require('../util/database');

module.exports = class Appointment {

    constructor(appID, pickDate ,pickTime ,vehicleID ,status,feedbackID,serviceID,servicePrice,addDate,userID) {
        this.appID = appID;
        this.pickDate = pickDate;
        this.pickTime = pickTime;
        this.vehicleID = vehicleID;
        this.status = status;
        this.feedbackID = feedbackID;
        this.serviceID = serviceID;
        this.servicePrice = servicePrice;
        this.userID = userID;
    }
      saveAppointment(){
        const query = "INSERT INTO appointment(appID, date ,time ,vehicleID ,status,service_ID,price,userID) VALUE(?,?,?,?,?,?,?,?)";
         return db.execute(query,[this.appID, this.pickDate, this.pickTime, this.vehicleID , this.status, this.serviceID ,this.servicePrice ,this.userID]);
     }

     static fetchAllAppointments() {
         const query = "SELECT * FROM appointment";
         return db.execute(query);
     }
     static fetchAllAppointmentsByCustomerID() {
         const query = "SELECT * FROM appointment where userID = ?";
         return db.execute(query);
     }

    static removeAppointment(appID){
        const query = "DELETE FROM appointment WHERE appID = ?";
        return db.execute(query,[appID]);
    }
    static getAppointmentById(appID){
        const query = "SELECT * FROM appointment WHERE appID = ?";
        return db.execute(query,[appID]);
    }

     updateAppointment(){
        const query = "UPDATE appointment set date = ? ,time = ? ,vehicleID = ? , status = ? ,feedbackID = ? ,service_ID = ? ,price = ?  WHERE appID = ? ";
        return db.execute(query,[this.pickDate, this.pickTime, this.vehicleID , this.status, this.feedbackID , this.serviceID ,this.servicePrice ,this.appID]);
    }

    updateAppointmentStatus(){
        const query = "UPDATE appointment set status = ?  WHERE appID = ?";
        return db.execute(query,[ this.status,this.appID]);
    }



};