

let empIdField = $('#employeeID');
let empFulNameField = $('#full_name');
let empTypeField= $('#employeeType');
let empNICField = $('#nicNo');
let empMobileField = $('#mobile');
let empPasswordField = $('#pwd');

let alertBtn = document.getElementById('test');
alertBtn.addEventListener('click', () => {

});

function removeEmployee(empID){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {

            // $('#removeBtn').attr("href",);

            // $.ajax({
            //     url: "/employees/deleteEmployee/"+empID ,
            //     method:'delete',
            //     success: function (result) {
            //         Swal.fire(
            //                 'Deleted!',
            //                 'Your file has been deleted.',
            //                 'success'
            //         );
            //         setTimeout(()=>{
            //             $.get('/admin/dashboard/employee');
            //         },3000);
            //     },
            //     error: function (err){
            //         console.log(err);
            //     }
            // });


        }
    });
}

function getEmployeeById(empID){

    $.ajax({
        url: "/employees/getEmployee/"+empID ,
        method:'GET',
        success: function (result) {
            // console.log(result);

            empIdField.val(result[0].emp_id);
            empFulNameField.val(result[0].emp_name);
            empTypeField.val(result[0].emp_type);
            empNICField.val(result[0].emp_nic);
            empMobileField.val(result[0].emp_mobile);
            empPasswordField.val(result[0].emp_pwd);
            // $("#employeeType option:selected").val(result[0].emp_type);

            // Swal.fire(
            //         'Deleted!',
            //         'Your file has been deleted.',
            //         'success'
            // );
            // setTimeout(()=>{
            //     $.get('/admin/dashboard/employee');
            // },3000);
        },
        error: function (err){
            console.log(err);
        }
    });
}
