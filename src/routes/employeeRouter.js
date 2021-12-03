

const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeControlller');




router.get('/', employeeController.getAllEmployees);
router.post('/create', employeeController.createEmployee);


module.exports = router;
