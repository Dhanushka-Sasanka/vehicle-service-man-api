const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeControlller');
const summaryController = require('../controllers/summaryController');
const appointmentController = require('../controllers/appointmentController');
const serviceController = require('../controllers/serviceController');
const adminController = require('../controllers/adminController');
const systemController = require('../controllers/systemController');

// const employeeModel = require('../models/employeeModel');


router.get('/dashboard/system', systemController.systemView);
router.get('/dashboard/employee', employeeController.getAllEmployees);
router.get('/dashboard/appointment', appointmentController.appointmentView);
router.get('/dashboard/service', serviceController.serviceView);
router.get('/dashboard/summary',summaryController.summaryView);


module.exports = router;
// router.get('/dashboard', (req, res , next)=>{
//     // console.log(__dirname);
//     // console.log(employeeController.getAllEmployees());
//     employeeController.fetchAllEmployees().then(([rows , fieldData])=>{
//         console.log(rows)
//         res.render('admin-main-layout',{ employeeList : rows});
//         // res.render('templates/admin/admin_employee' ,{
//         //     employees: rows,
//         //     pageTitle: "Employees"
//         // });
//     }).catch(err=>{console.log(err)});
//     // res.render('admin-main-layout',{ employeeList:{employeeID: 'EMP001', name: 'Dhanushka'} });
// });
