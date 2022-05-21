const express = require('express');
const router = express.Router();
const adminEmployeeController = require('../controllers/employeeControlller');
const adminAppoController = require('../controllers/appointmentController');
const employeeEmployeeController = require('../controllers/employee/employeeControlller');
const employeeSummaryController = require('../controllers/employee/employeeSummaryController');
const employeeAdvertisementController = require('../controllers/employee/employeeAdvertisementController');
const employeeAppointmentController = require('../controllers/employee/employeeAppointmentController');
const employeePaymentController = require('../controllers/employee/employeePaymentController');
const employeeServiceController = require('../controllers/employee/employeeServiceController');

// employeeAppointments
router.get('/dashboard/appointment', employeeAppointmentController.employeeAppointmentView);
// employeePayments
router.get('/dashboard/payment', employeePaymentController.employeePaymentView);
// employeeServiceHistorys
router.get('/dashboard/service-history', employeeServiceController.employeeServiceView);
// employeeSellVehicle
router.get('/dashboard/sell-vehicle', employeeAdvertisementController.employeeSellVehicleView);
// employeeSummery
router.get('/dashboard/summary', employeeSummaryController.employeeSummaryView);


router.get('/', adminEmployeeController.getAllEmployees);
router.post('/createEmployee', adminEmployeeController.createEmployee);
router.get('/deleteEmployee/:empID', adminEmployeeController.deleteEmployee);
router.get('/getEmployee/:empID', adminEmployeeController.getEmployeeByID);
router.get('/updateEmployee/:empID', adminEmployeeController.deleteEmployee);



module.exports = router;
