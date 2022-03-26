const Advertisement = require('../models/advertisementModel');

// exports.advertisementView = (req, res, next) => {
//     res.render('admin-advertisements');
// };

exports.createAdvertisement = async (req, res, next) => {

    // let advertisementID = req.body.advertisementID;
    // let addDate = req.body.addDate
    let vehicleType = req.body.vehicleType
    let model = req.body.model
    let yom = req.body.yom
    let transmission = req.body.transmission
    let engineCap = req.body.engineCap
    let description = req.body.description
    let brand = req.body.brand
    let edition = req.body.edition
    let condition = req.body.condition
    let fuelType = req.body.fuelType
    let mileage = req.body.mileage
    let imageURL = req.body.imageURL
    let sellerName = req.body.sellerName
    let price = req.body.price
    let contactNo = req.body.contactNo
    let currentDate = new Date().toISOString();


    const newAdvertisement = new Advertisement(0, currentDate, vehicleType, model, yom, transmission, engineCap,
        description, brand, edition, condition, fuelType, mileage, imageURL, sellerName, price, contactNo);

    console.log(newAdvertisement);

    newAdvertisement.saveAdvertisement().then(([result, fieldSet]) => {
        if (result.affectedRows == 1) {
            res.json("1");
        } else {
            res.json("0");
        }
    }).catch(error => {
        console.log(error);
        next(new Error(error));
    })

};

exports.fetchAllAdvertisements = (req, res, next) => {

    Advertisement.fetchAllAdvertisements().then(([rows, fieldSet]) => {
        res.json(rows);
    }).catch(error => {
        next(new Error(error));
    });
}

exports.fetchAdvertisementByID = (req, res, next) => {
    let advertisementID = req.params.advertisementID;
    Advertisement.getAdvertisementById(advertisementID).then(([rows, fieldSet]) => {
        res.json(rows);
    }).catch(error => {
        next(new Error(error));
    });
}

exports.removeAdvertisement = (req, res, next) => {
    let advertisementID = req.params.advertisementID;

    Advertisement.removeAdvertisement(advertisementID).then(([result, fieldSet]) => {
        if (result.affectedRows == 1) {
            res.json("1");
        } else {
            res.json("0");
        }
    }).catch(error => {
        next(new Error(error));
    });
}

exports.updateAdvertisement = (req, res, next) => {
    let advertisementID = req.body.advertisementID;
    let addDate = req.body.addDate
    let vehicleType = req.body.vehicleType
    let model = req.body.model
    let yom = req.body.yom
    let transmission = req.body.transmission
    let engineCap = req.body.engineCap
    let description = req.body.description
    let brand = req.body.brand
    let edition = req.body.edition
    let condition = req.body.condition
    let fuelType = req.body.fuelType
    let mileage = req.body.mileage
    let imageURL = req.body.imageURL
    let sellerName = req.body.sellerName
    let price = req.body.price
    let contactNo = req.body.contactNo

    const updatedAdvertisement = new Advertisement(advertisementID, addDate, vehicleType, model, yom, transmission, engineCap,
        description, brand, edition, condition, fuelType, mileage, imageURL, sellerName, price, contactNo);

    updatedAdvertisement.updateAdvertisement().then(([result, fieldSet]) => {
        if (result.affectedRows == 1) {
            res.json("1");
        } else {
            res.json("0");
        }
    }).catch(error => {
       next(new Error(error));
    });
}
