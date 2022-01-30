const Service = require('../models/serviceModel');

exports.serviceView = (req, res, next) => {
    res.render('admin-services');
};

exports.createService = async (req, res, next) => {

    let serviceID = req.body.serviceID;
    let serviceType = req.body.serviceType;
    let servicePrice = req.body.servicePrice;


    const newService = new Service(serviceID, serviceType, servicePrice);
    // const newService = new Service("S001", "Interio", 1250.00);
    // console.log(res);

    newService.saveService().then(() => {
        res.json("1");
    }).catch(error => {
        console.log(error);
    })

};

exports.fetchAllServices = (req, res, next) => {

    Service.fetchAllServices().then(([rows, fieldSet]) => {
        res.json(rows);
    }).catch(error => {
        console.log(error);
    });
}

exports.fetchServiceByID = (req, res, next) => {
    let serviceID = req.params.serviceID;
    // console.log(req.params);
    Service.getServiceById(serviceID).then(([rows, fieldSet]) => {
        res.json(rows);
    }).catch(error => {
        console.log(error);
    });
}

exports.removeService = (req, res, next) => {
    let serviceID = req.params.serviceID;

    Service.removeService(serviceID).then(([result, fieldSet]) => {

        // console.log(result);
        if (result.affectedRows == 1) {
            res.json("1");
        }else{
            res.json("0");

        }
    }).catch(error => {
        console.log(error);
    });
}

exports.updateService = (req, res, next) => {
    let serviceID = req.body.serviceID;
    let serviceType = req.body.serviceType;
    let servicePrice = req.body.servicePrice;

    // console.log(req.params);
    const updatedService = new Service(serviceID, serviceType, servicePrice);
    updatedService.updateService().then(([result, fieldSet]) => {
        if (result.affectedRows == 1) {
            res.json("1");
        }else{
            res.json("0");
        }
    }).catch(error => {
        console.log(error);
    });
}


