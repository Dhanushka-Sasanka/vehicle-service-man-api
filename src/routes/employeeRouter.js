

const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeControlller');




router.get('/', employeeController.getAllEmployees);
router.post('/createEmployee', employeeController.createEmployee);
router.get('/deleteEmployee/:empID', employeeController.deleteEmployee);
router.get('/getEmployee/:empID', employeeController.getEmployeeByID);
router.get('/updateEmployee/:empID', employeeController.deleteEmployee);


module.exports = router;
