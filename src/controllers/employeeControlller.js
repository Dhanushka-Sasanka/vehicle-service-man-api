const successResponse = require('../types/successResponse');
const employeeModel = require('../models/employeeModel');

exports.getAllEmployees = (req, res, next) => {
    // res.status(200).json({employees: [{employeeID: 'EMP001', name: 'Dhanushka'},{employeeID: 'EMP002', name: 'Asanka'} ]});
    // employeeModel.getAllEmployees().then(result=>{}).catch(err=>{console.log(err)});
    employeeModel.fetchAllEmployees().then(([rows, fieldData]) => {
        console.log(rows)
        res.status(200).json(rows);
    }).catch(err => {
        console.log(err)
    });
};

exports.fetchAllEmployees= () => {
    return employeeModel.fetchAllEmployees();
}


exports.createEmployee = (req, res, next) => {
    let employeeID = req.body.employeeID;
    let employeeName = req.body.name;
    let currentDate = new Date().toISOString();
    res.status(201).json(new successResponse(201, 'Employee Added..!', [{
        employeeID: employeeID,
        name: employeeName,
        addedDate: currentDate
    }]));
};
