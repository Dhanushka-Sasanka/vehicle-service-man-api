const db = require('../util/database');

module.exports = class Advertisement {


    constructor(advertisementID, addDate, vehicleType, model, yom, transmission, engineCap, description, brand, edition,
                condition, fuelType, mileage, imageURL, sellerName, price, contactNo) {
        this.advertisementID = advertisementID;
        this.addDate = addDate;
        this.vehicleType = vehicleType;
        this.model = model;
        this.yom = yom;
        this.transmission = transmission;
        this.engineCap = engineCap;
        this.description = description;
        this.brand = brand;
        this.edition = edition;
        this.condition = condition;
        this.fuelType = fuelType;
        this.mileage = mileage;
        this.imageURL = imageURL;
        this.sellerName = sellerName;
        this.price = price;
        this.contactNo = contactNo;
    }

    static fetchAllAdvertisements() {
        const query = "SELECT * FROM addvertisement";
        return db.execute(query);
    }

    static removeAdvertisement(addID) {
        const query = "DELETE FROM addvertisement WHERE addID = ?";
        return db.execute(query, [addID]);
    }

    static getAdvertisementById(addID) {
        const query = "SELECT * FROM addvertisement WHERE addID = ?";
        return db.execute(query, [addID]);
    }

    saveAdvertisement() {
        const query = "INSERT INTO addvertisement(addID, vehicleType,model,YOM,transmission,engine_cap,description,brand,edition,`condition`,fuelType,mileage,imageURL,sellerName,price,contactNo) VALUE(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        return db.execute(query, [0, this.vehicleType,
            this.model, this.yom, this.transmission, this.engineCap, this.description,
            this.brand, this.edition, this.condition, this.fuelType, this.mileage,
            this.imageURL, this.sellerName, this.price, this.contactNo]
        );
    }


    updateAdvertisement() {
        const query = "UPDATE addvertisement set  vehicleType = ? ,model= ? ,yom= ?,transmission= ?,engine_cap= ?,description= ?,brand= ?,edition= ?,fuleType = ?,mileage = ?, imageURL = ?,sellerName= ?,price = ?,contactNo= ? WHERE addID= ?";
        return db.execute(query, [ this.vehicleType,
            this.model, this.yom, this.transmission, this.engineCap, this.description,
            this.brand, this.edition, this.condition, this.fuelType, this.mileage,
            this.imageURL, this.sellerName, this.price, this.contactNo,this.advertisementID]);
    }


};
