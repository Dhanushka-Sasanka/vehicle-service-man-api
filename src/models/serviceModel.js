const db = require('../util/database');

module.exports = class Service {

    constructor(serviceID, serviceType, servicePrice) {
        this.serviceID = serviceID;
        this.serviceType = serviceType;
        this.servicePrice = servicePrice;
    }

     static fetchAllServices() {

         const query = "SELECT * FROM services";
         return db.execute(query);

     }

     saveService(){
        const query = "INSERT INTO services VALUE(?,?,?)";
         return db.execute(query,[this.serviceID ,this.serviceType ,this.servicePrice]);
     }

    static removeService(serviceID){
        const query = "DELETE FROM services WHERE serviceID = ?";
        return db.execute(query,[serviceID]);
    }
    static getServiceById(serviceID){
        const query = "SELECT * FROM services WHERE serviceID = ?";
        return db.execute(query,[serviceID]);
    }

     updateService(){
        const query = "UPDATE services set  serviceType = ? ,price = ? WHERE serviceID = ?";
        return db.execute(query,[this.serviceType ,this.servicePrice , this.serviceID]);
    }



};
