function setAppointmentRows(res ,id) {
    $('#'+id).empty();
    for (let a in res) {
        let appointment = res[a];

        let addTime = appointment['addTime'];
        let appID = appointment['appID'];
        let date = appointment['date'];
        let feedbackID = appointment['feedbackID'];
        let price = appointment['price'];
        let serviceID = appointment['service_ID'];
        let status = appointment['status'];
        let time = appointment['time'];
        let userID = appointment['userID'];
        let vehicleID = appointment['vehicleID'];
        let serviceType = appointment['serviceType'];
        let vehicleType = appointment['vehicleType'];
        let regNo = appointment['regNo'];
        let customerID = appointment['customerID'];

        let newDate = new Date(addTime);
        let formattedDate = newDate.toLocaleDateString();

        let row = " <div class=\"card m-3 bg-light bg-gradient\">\n" +
            "        <h5 class=\"card-header\">Vehicle No : <i>" + regNo + "</i></h5>\n" +
            "        <div class=\"card-body\">\n" +
            "            <div class=\"row\">\n" +
            "                <div class=\"col-md-9\">\n" +
            "                    <ul class=\"nav nav-pills card-header-pills m-1\">\n" +
            "                        <li class=\"mr-1\"><b>Vehicle Type : </b><i>" + vehicleType + "</i></li>\n" +
            "                        <li class=\"mr-1\"><b>Time : </b><i>" + formattedDate + "</i></li>\n" +
            "                        <li class=\"mr-1\"><b>Service Type : </b><i>" + serviceType + "</i></li>\n" +
            "                    </ul>\n" +
            "                </div>\n" +
            "                <div class=\"col-md-3\">\n" +
            "                    <div class=\"range\">\n" +
            "                        <input type=\"range\" min=\"1\" max=\"3\" steps=\"1\" value=\"1\">\n" +
            "                    </div>\n" +
            "\n" +
            "                    <ul class=\"range-labels\">\n" +
            "                        <li class=\"active selected\">Start</li>\n" +
            "                        <li>Processing</li>\n" +
            "                        <li>End</li>\n" +
            "\n" +
            "                    </ul>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>";

        $('#'+id).append(row);
    }
}

function getAllAppointmentsWithVehicleDetails() {

    $.ajax({
        method: "GET",
        url: baseURL + "appointment/fetchAppointmentsWithVehicle",
        error: function (error) {
            alert(error);
        },
        success: function (res) {
            console.log(res);

          setAppointmentRows(res,"appointment-area");
        }
    });

}

getAllAppointmentsWithVehicleDetails();

function clearAllFields() {
    $('#serviceID').val("");
    $('#serviceType').val("");
    $('#servicePrice').val("");
}

function getServiceByID(serviceID) {

    clearAllFields();
    $('#serviceUpdateBtn').prop('disabled', false);
    $('#serviceSaveBtn').prop('disabled', true);
    $.ajax({
        method: "GET",
        url: baseURL + "service/getServiceByID/" + serviceID,
        error: function (error) {
            alert(error);
        },
        success: function (res) {
            // console.log(res);

            let service = res[0];
            let serviceID = service['serviceID'];
            let serviceType = service['serviceType'];
            let servicePrice = service['price'];

            $('#serviceID').val(serviceID);
            $('#serviceType').val(serviceType);
            $('#servicePrice').val(servicePrice);

        }
    });

}


function findAppointmentsByVehicleNoOrAppointmentNo(){
    console.log("findAppointment");
}
$('#searchByAppNoOrVehicleNo').keyup(function (){
    findAppointmentsByVehicleNoOrAppointmentNo();
    console.log("sadad");
});

