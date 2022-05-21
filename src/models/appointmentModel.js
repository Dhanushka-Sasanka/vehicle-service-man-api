const db = require('../util/database');

module.exports = class Appointment {

    constructor(appID, pickDate, pickTime, vehicleID, status, feedbackID, serviceID, servicePrice, userID) {
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

    static fetchAllAppointments() {
        const query = "SELECT * FROM appointment";
        return db.execute(query);
    }

    static fetchAllAppointmentsByCustomerID(userID) {
        const query = "SELECT * FROM appointment where userID = ?";
        return db.execute(query, [userID]);
    }

    static removeAppointment(appID) {
        const query = "DELETE FROM appointment WHERE appID = ?";
        return db.execute(query, [appID]);
    }

    static getAppointmentById(appID) {
        const query = "SELECT * FROM appointment WHERE appID = ?";
        return db.execute(query, [appID]);
    }

    saveAppointment() {
        const query = "INSERT INTO appointment(appID, date ,time ,vehicleID ,status,service_ID,price,userID) VALUE(?,?,?,?,?,?,?,?)";
        return db.execute(query, [this.appID, this.pickDate, this.pickTime, this.vehicleID, this.status, this.serviceID, this.servicePrice, this.userID]);
    }

    updateAppointment() {
        const query = "UPDATE appointment set date = ? ,time = ? ,vehicleID = ? , status = ? ,feedbackID = ? ,service_ID = ? ,price = ?  WHERE appID = ? ";
        return db.execute(query, [this.pickDate, this.pickTime, this.vehicleID, this.status, this.feedbackID, this.serviceID, this.servicePrice, this.appID]);
    }

    updateAppointmentStatus() {
        const query = "UPDATE appointment set status = ?  WHERE appID = ?";
        return db.execute(query, [this.status, this.appID]);
    }
    static fetchAllAppointmentsWithVehicleDetails() {
        const query = "SELECT * FROM appointment a, vehicle v ,services s WHERE a.vehicleID = v.vehicleID AND s.serviceID=a.service_ID";
        return db.execute(query);
    }

};
