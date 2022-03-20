
const Vehicle = require('../models/vehicleModel');



exports.fetchAllVehicle = (req, res, next) => {

    Vehicle.fetchAllVehicles().then(([rows, fieldSet]) => {
        res.json(rows);
    }).catch(error => {
        console.log(error);
    });
}

exports.createVehicle= async (req, res, next) => {

    // let vehicleID = req.body.vehicleID
    let vehicleType = req.body.vehicleType;
    let regNo = req.body.regNo;
    let customerID = req.body.customerID;


    const newVehicle = new Vehicle(0,vehicleType,regNo,customerID);

    newVehicle.saveVehicle().then(() => {
        res.json("1");
    }).catch(error => {
        console.log(error);
    })

};

exports.updateVehicle = (req, res, next) => {
    let vehicleID = req.body.vehicleID
    let vehicleType = req.body.vehicleType;
    let regNo = req.body.regNo;
    let customerID = req.body.customerID;

    // console.log(req.params);
    const updateVehicle = new Vehicle(vehicleID,vehicleType,regNo,customerID);
    updateVehicle.updateVehicle().then(([result, fieldSet]) => {
        if (result.affectedRows == 1) {
            res.json("1");
        }else{
            res.json("0");
        }
    }).catch(error => {
        console.log(error);
    });
}



exports.removeVehicle= (req, res, next) => {
    let vehicleID = req.params.vehicleID;

    Vehicle.removeVehicle(vehicleID).then(([result, fieldSet]) => {

        if (result.affectedRows == 1) {
            res.json("1");
        }else{
            res.json("0");

        }
    }).catch(error => {
        console.log(error);
    });
}

exports.fetchVehicleByID = (req, res, next) => {
    let vehicleID = req.params.vehicleID;

    Vehicle.getVehicleById(vehicleID).then(([rows, fieldSet]) => {
        res.json(rows);
    }).catch(error => {
        console.log(error);
    });
}


exports.getAllVehiclesByCustomerID = (req, res, next) => {
    let customerID = req.params.customerID;

    Vehicle.getVehicleByCustomerID(customerID).then(([rows, fieldSet]) => {
        res.json(rows);
    }).catch(error => {
        console.log(error);
    });
}



