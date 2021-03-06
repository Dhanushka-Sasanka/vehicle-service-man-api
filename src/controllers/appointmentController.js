const Appointment = require('../models/appointmentModel');

// admin-appointment-view
exports.appointmentView = (req, res, next) => {
    res.render('admin-appointment');
};

exports.fetchAppointment = (req, res, next) => {
    Appointment.fetchAllAppointments().then(([rows, fieldSet]) => {
        res.json(rows);
    }).catch(error => {
         console.log(error);
        next(new Error(error));
    });
};

exports.addAppointment = (req, res, next) => {
    let vehicleID = req.body.vehicleID;
    let serviceID = req.body.serviceID;
    let pickDate = req.body.pickDate;
    let pickTime = req.body.pickTime;
    let servicePrice = req.body.servicePrice;
    let userID = req.body.userID;
    let status = "PENDING";

    const newAppointment = new Appointment(0,pickDate,pickTime,vehicleID,status,0,serviceID,servicePrice,userID);
    console.log(newAppointment);
    newAppointment.saveAppointment().then(() => {
        res.json("1");
    }).catch(error => {
         console.log(error);
        next(new Error(error));
    })
};


exports.updateAppointment = (req, res, next) => {
    let appID = req.params.appID;
    let vehicleID = req.body.vehicleID;
    let serviceID = req.body.serviceID;
    let pickDate = req.body.pickDate;
    let pickTime = req.body.pickTime;
    let servicePrice = req.body.servicePrice;
    let status = req.body.status;
    let userID = req.body.userID;

    const updatedAppointment = new Appointment(appID,pickDate,pickTime,vehicleID,status,0,serviceID,servicePrice,userID);
    updatedAppointment.updateAppointment().then(([result, fieldSet]) => {
        // console.log(result);
        if (result.affectedRows === 1) {
            res.json("1");
        }else{
            res.json("0");

        }
    }).catch(error => {
         console.log(error);
        next(new Error(error));
    });
};

exports.updateAppointmentStatus = (req, res, next) => {
    let appID = req.params.appID;
    let status = req.body.status;

    const updatedAppointment = new Appointment(appID,0,0,0,status,0,0,0);
    updatedAppointment.updateAppointmentStatus().then(([result, fieldSet]) => {
        // console.log(result);
        if (result.affectedRows === 1) {
            res.json("1");
        }else{
            res.json("0");

        }
    }).catch(error => {
         console.log(error);
        next(new Error(error));
    });
};

exports.removeAppointment = (req, res, next) => {
    let appID = req.params.appID;
    Appointment.removeAppointment(appID).then(([result, fieldSet]) => {
        if (result.affectedRows === 1) {
            res.json("1");
        }else{
            res.json("0");
        }
    }).catch(error => {
         console.log(error);
        next(new Error(error));
    });
};

exports.fetchAppointmentById = (req, res, next) => {
    let appID = req.params.appID;
    Appointment.getAppointmentById(appID).then(([rows, fieldSet]) => {
        res.json(rows);
    }).catch(error => {
         console.log(error);
        next(new Error(error));
    });
};

exports.fetchAppointmentsByCustomerID = (req, res, next) => {
    let userID = req.params.userID;
    Appointment.fetchAllAppointmentsByCustomerID(userID).then(([rows, fieldSet]) => {
        res.json(rows);
    }).catch(error => {
         console.log(error);
        next(new Error(error));
    });
};

exports.fetchAllAppointmentsWithVehicleDetails = (req, res, next) => {
    Appointment.fetchAllAppointmentsWithVehicleDetails().then(([rows, fieldSet]) => {
        res.json(rows);
    }).catch(error => {
        console.log(error);
        next(new Error(error));
    });
};

