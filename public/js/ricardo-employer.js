// Read the data from database to create dropdown of positions
$(document).ready(function() {
    $.ajax({
        url: "/api/positions",
        method: "GET"
    }).then(function(response) {
        $("#employeePosition").empty();

        for (let i = 0; i < response.length; i++)
        {
            $("#employeePosition").append('<option value=' + String(response[i].PositionId) + '>' + String(response[i].PositionName) + '</options>');
        }
    });
});

// Function send the employee data to the post
function sendEmployeeData(employeeData)
{
    $.ajax({
        url: "/api/employees",
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
}

$("#addNewEmployeeButton").on('click', function(event) {
    event.preventDefault();
    readEmployerFormData();
});



