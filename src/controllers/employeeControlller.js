const successResponse = require('../types/successResponse');
const Employee = require('../models/employeeModel');

exports.getAllEmployees = (req, res, next) => {
    // res.status(200).json({employees: [{employeeID: 'EMP001', name: 'Dhanushka'},{employeeID: 'EMP002', name: 'Asanka'} ]});
    // employeeModel.getAllEmployees().then(result=>{}).catch(err=>{console.log(err)});
//
//     let allEmployees = Employee.fetchAllEmployees();
//         res.render('admin-main-layout',{ employeeList : allEmployees});


    if (req.options === 'ADD') {
        // console.log("AAAAA");

        Employee.fetchAllEmployees().then(([rows, fieldSet]) => {
            // res.render('admin-employee' ,{employeeList: rows, pageTitle: "AAAAAAA" , isSavedEmployee : req.isSavedEmployee});
            // res.status(200).json({employeeList: rows, pageTitle: "AAAAAAA" , isSavedEmployee : req.isSavedEmployee});
            // res.redirect('/admin/dashboard/employee');
            res.renderPjax('admin-employee', {
                employeeList: rows,
                pageTitle: "Manage Employees",
                isSavedEmployee: true
            });
        }).catch(err => {
                console.log(err)
            }
        )
    } else if (req.options === 'DELETE')  {

        Employee.fetchAllEmployees().then(([rows, fieldSet]) => {
            // res.status(200).json(rows);
            res.renderPjax('admin-employee', {
                employeeList: rows,
                pageTitle: "Manage Employees",
                isDeleteEmployee: true
            });
        }).catch(err => {
                console.log(err)
            }
        )

    }else{

        Employee.fetchAllEmployees().then(([rows, fieldSet]) => {
            // res.status(200).json(rows);
            res.render('admin-employee', {
                employeeList: rows,
                pageTitle: "Manage Employees",
                isSavedEmployee: false
            });
        }).catch(err => {
                console.log(err)
            }
        )
    }
};

// exports.fetchAllEmployees= () => {
//     return Employee.fetchAllEmployees();
// }


exports.createEmployee = async (req, res, next) => {

    let employeeID = req.body.employeeID;
    let employeeName = req.body.full_name;
    let employeeMobile = req.body.mobile;
    let employeeNicNo = req.body.nicNo;
    let employeePwd = req.body.pwd;
    let employeeType = req.body.employeeType;
    const employeeStatus = "ACTIVE";
    // const newEmployee = new Employee(employeeID, employeeName, employeeNicNo, employeeMobile, employeePwd, employeeType, employeeStatus)
    const newEmployee = new Employee("E068", "Sandya", "953565652V", "075523253", "1234", "ADMIN", employeeStatus);
    let currentDate = new Date().toISOString();

    newEmployee.saveEmployee().then(() => {
        let reqObj = {options: 'ADD'}
        this.getAllEmployees(reqObj, res, next);
    }).catch(error => {
        console.log(error);
    })

    // let result = await newEmployee.saveEmployee();
    // if (result.affectedRows === 1) {
    //     let reqObj = {isSavedEmployee: true}
    //     this.getAllEmployees(reqObj, res, next);
    //     next();
    // }


};

exports.deleteEmployee = (req, res, next) => {

    let employeeID = req.params.empID;
    // console.log("employeeID"  , employeeID);
    Employee.removeEmployee(employeeID).then(()=> {
        // console.log(result);
        // if (result.affectedRows === 1) {
            let reqObj = {options: 'DELETE'}
            this.getAllEmployees(reqObj, res, next);
        // }
    }).catch(error => {
        console.log(error);
    })

};

exports.getEmployeeByID = (req, res, next) => {

    let employeeID = req.params.empID;
    // console.log("employeeID"  , employeeID);
    Employee.getEmployeeById(employeeID).then(([rows, fieldSet]) => {
        res.status(200).json(rows);

        // res.renderPjax('admin-employee', {
        //     employeeList: rows,
        //     pageTitle: "Manage Employees",
        //     isDeleteEmployee: true
        // });
    }).catch(err => {
            console.log(err)
        }
    )

};


