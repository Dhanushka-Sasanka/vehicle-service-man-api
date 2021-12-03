const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeControlller');
// const employeeModel = require('../models/employeeModel');

router.get('/dashboard', (req, res , next)=>{
    // console.log(__dirname);
    // console.log(employeeController.getAllEmployees());
    employeeController.fetchAllEmployees().then(([rows , fieldData])=>{
       console.log(rows)
    res.render('admin-main-layout',{ employeeList : rows});
       // res.render('templates/admin/admin_employee' ,{
       //     employees: rows,
       //     pageTitle: "Employees"
       // });
   }).catch(err=>{console.log(err)});
    // res.render('admin-main-layout',{ employeeList:{employeeID: 'EMP001', name: 'Dhanushka'} });
});

module.exports = router;
