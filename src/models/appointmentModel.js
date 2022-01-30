const db = require('../util/database');

module.exports = class Appointment {

    constructor(appID, date ,time ,vehicleID ,status,feedbackID,serviceID,servicePrice,addDate) {
        this.appID = appID;
        this.date = date;
        this.time = time;
        this.vehicleID = vehicleID;
        this.status = status;
        this.feedbackID = feedbackID;
        this.serviceID = serviceID;
        this.servicePrice = servicePrice;
    }
      saveAppointment(){
        const query = "INSERT INTO appointment(appID, date ,time ,vehicleID ,status,service_ID,price) VALUE(?,?,?,?,?,?,?)";
         return db.execute(query,[this.appID, this.date, this.time, this.vehicleID , this.status, this.serviceID ,this.servicePrice]);
     }

     static fetchAllAppointments() {
         const query = "SELECT * FROM appointment";
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
        const query = "UPDATE appointment set date = ? ,time = ? ,vehicleID = ? , status = ? ,feedbackID = ? ,service_ID = ? ,price = ?  WHERE appID = ?";
        return db.execute(query,[this.date, this.time, this.vehicleID , this.status, this.feedbackID , this.serviceID ,this.servicePrice ,this.appID]);
    }

    updateAppointmentStatus(){
        const query = "UPDATE appointment set status = ?  WHERE appID = ?";
        return db.execute(query,[ this.status,this.appID]);
    }



};
