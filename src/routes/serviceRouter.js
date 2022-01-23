

const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');




// router.get('/', employeeController.getAllEmployees);
router.post('/createService', serviceController.createService);
router.get('/getAllServices', serviceController.fetchAllServices);
router.get('/getServiceByID/:serviceID', serviceController.fetchServiceByID);
router.delete('/removeService/:serviceID', serviceController.removeService);
router.post('/updateService/:serviceID', serviceController.updateService);



module.exports = router;
