// Read the data from database to create dropdown of positions
$(document).ready(function() {
    $.ajax({
        url: "http://localhost:3000/api/positions",
        method: "GET"
    }).then(function(response) {
        $("#employeePosition").empty();

        for (let i = 0; i < response.length; i++)
        {
            $("#employeePosition").append('<option value=' + String(response[i].PositionId) + '>' + String(response[i].PositionName) + '</options>');
        }
    });
});


function sendEmployeeData(employeeData)
{
    $.ajax({
        url: "http://localhost:3000/api/employees",
        method: "POST",
        data: employeeData
    }).then(function(data){
        $('input').val('');
    });
}


function readEmployerFormData()
{
    let employee = {
        FirstName: $("#firstName").val().trim(),
        LastName: $("#lastName").val().trim(),
        PhoneNumber: $("#phone").val().trim(),
        Email: $("#email").val().trim(),
        Supervisor: false,
        PositionPositionId: parseInt($("#employeePosition option:selected").val())
    }

    sendEmployeeData(employee);
    // return employee;
}

$("#addNewEmployeeButton").on('click', function(event) {
    event.preventDefault();
    readEmployerFormData();
});



