
exports.summaryView = (req, res, next) => {
    // res.status(200).json({employees: [{employeeID: 'EMP001', name: 'Dhanushka'},{employeeID: 'EMP002', name: 'Asanka'} ]});
    // employeeModel.getAllEmployees().then(result=>{}).catch(err=>{console.log(err)});
//
//     let allEmployees = Employee.fetchAllEmployees();
//         res.render('admin-main-layout');
    res.render('admin-summary');

    // Employee.fetchAllEmployees().then(([rows, fieldSet]) => {
    //     // res.status(200).json(rows);
    //     // res.render('templates/admin/admin_employee' ,{
    //     //     employees: rows,
    //     //     pageTitle: "Employees"
    //     // });
    // }).catch(err => {
    //         console.log(err)
    //     }
    // )
};
