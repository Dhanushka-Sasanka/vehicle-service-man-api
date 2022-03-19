

const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');




router.post('/createVehicle', vehicleController.createVehicle);
router.get('/getAllVehicles', vehicleController.fetchAllVehicle);
router.get('/getVehicleByID/:vehicleID', vehicleController.fetchVehicleByID);
router.get('/getVehicleByCustomerID/:customerID', vehicleController.getAllVehiclesByCustomerID);
router.delete('/removeVehicle/:vehicleID', vehicleController.removeVehicle);
router.post('/updateVehicle/:vehicleID', vehicleController.updateVehicle);



module.exports = router;
