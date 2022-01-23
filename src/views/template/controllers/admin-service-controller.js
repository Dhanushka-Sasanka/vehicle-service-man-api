$('#serviceUpdateBtn').prop('disabled', true);

$('#serviceSaveBtn').click(() => {

    let serviceID = $('#serviceID').val();
    let serviceType = $('#serviceType').val();
    let servicePrice = $('#servicePrice').val();


    let formData = {
        serviceID: serviceID,
        serviceType: serviceType,
        servicePrice: servicePrice
    };

    // console.log(formData);
    $.ajax({
        type: "POST",
        url: baseURL + "service/createService",
        data: formData,
        // async: true,
        // processData: false,
        // contentType: false,
        error: function (error) {

            // alert(error);
        },
        success: function (res) {
            if (res === "1") {

                getAllServices();
                clearAllFields();
                Swal.fire(
                    'Good job!',
                    'Service Added Success.!',
                    'success'
                )
            }
        }
    });


});


function getAllServices() {

    $('#serviceTable').empty()

    $.ajax({
        method: "GET",
        url: baseURL + "service/getAllServices",
        error: function (error) {
            alert(error);
        },
        success: function (res) {
            // console.log(res);

            for (let a in res) {
                let service = res[a];
                let serviceID = service['serviceID'];
                let serviceType = service['serviceType'];
                let price = service['price'];

                let row = "<tr>\n" +
                    " <td>" + serviceID + "</td>\n" +
                    "<td>" + serviceType + "</td>\n" +
                    "<td>" + price + "</td>\n" +
                    "<td>\n" +
                    "<a class=\"btn btn-info btn-sm\" id=\"" + serviceID + "\" onclick='getServiceByID(this.id)'>\n" +
                    "                            <i class=\"far fa-edit\"></i>\n" +
                    "                        </a>\n" +
                    "                        <a class=\"btn btn-danger btn-sm \" id=\"" + serviceID + "\" onclick='removeService(this.id)'>\n" +
                    "                            <i class=\"far fa-trash-alt\"></i>\n" +
                    "                        </a>\n" +
                    "                    </td>\n" +
                    "</tr>";

                $('#serviceTable').append(row);
            }
        }
    });

}

getAllServices();

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


$('#serviceUpdateBtn').click(() => {

    let serviceID = $('#serviceID').val();
    let serviceType = $('#serviceType').val();
    let servicePrice = $('#servicePrice').val();


    let formData = {
        serviceID: serviceID,
        serviceType: serviceType,
        servicePrice: servicePrice
    };

    $.ajax({
        url: baseURL + "service/updateService/" + serviceID,
        method: 'POST',
        data: formData,
        success: function (result) {

            // console.log(result);

            if (result === "1") {
                getAllServices();
                clearAllFields();
                Swal.fire(
                    'Updated!',
                    'Your file has been deleted.',
                    'success'
                );
            } else {
                Swal.fire(
                    'Ops!',
                    'Something wrong.',
                    'error'
                );
            }

        },
        error: function (err) {
            console.log(err);
        }
    });

});
