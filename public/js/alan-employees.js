// Read the data from database to create dropdown of employees
$(document).ready(function() {
    $.ajax({
        url: "/api/employees",
        method: "GET"
    }).then(function(response) {
        $('tbody').empty();
        
        for (let i = 0; i < response.length; i++)
        {
            let rowString = '<tr><th scope="row"><span id="firstName">' + response[i].FirstName + '</span></th>';
            rowString += '<td><span id="lastName">' + response[i].LastName + '</span></td>';
            rowString += '<td><span>' + response[i].Email + '</span></td>';
            rowString += '<td><span id="phoneNumber">' + response[i].PhoneNumber + '</span></td>';
            rowString += '<td><button data-id="'+response[i].EmployeeId+'" type="button" class="btn btn-primary UpdateContactCardBtn" data-toggle="modal" data-target="#exampleModal">Update</button></td>';
            rowString += '<td><button data-id="'+response[i].EmployeeId+'" type="button" class="btn btn-primary DeleteContactCardBtn">Delete</button></td></tr>';
            $('tbody').append(rowString);
        }

    });
});

// Read the data from database to create dropdown of positions
$('body').on("click", ".UpdateContactCardBtn", function (){
    let empId = $(this).attr("data-id")
    console.log(empId);
    console.log($(this).attr("data-id"));

    $.ajax({
        url: "/api/positions",
        method: "GET"
    }).then(function(response) {
        $("#UpdateEmployeePosition").empty();

        for (let i = 0; i < response.length; i++)
        {
            $("#UpdateEmployeePosition").append('<option value=' + String(response[i].PositionId) + '>' + String(response[i].PositionName) + '</options>');
        }
    });

    $('body').on("click", "#UpdateEmployeeButton", function (event){
        event.preventDefault();
        readEmployerFormData(empId);
    });

});

//Update employee card
function sendEmployeeData(employeeData, empId)
{
    $.ajax({
        url: "/api/employees/"+empId,
        method: "PUT",
        data: employeeData
    }).then(function(data){
        $('input').val('');
    });
}


function readEmployerFormData(empId)
{
    let employee = {
        PhoneNumber: $("#modal-phone").val().trim(),
        Email: $("#modal-email").val().trim(),
        Supervisor: false,
        PositionPositionId: parseInt($("#employeePosition option:selected").val())
    }

    sendEmployeeData(employee, empId);
}

// Delete Employee Card
$('body').on("click", ".DeleteContactCardBtn", function (){
    $.ajax({
        url: "/api/employees/"+$(this).data("id"),
        method: "DELETE"
    }).then(function(response) {
        console.log(response)
    });
})

// data-target="#exampleModal" this is what makes it display the pop-up


// Read the data from database to create card of employees
// $(document).ready(function() {
//     $.ajax({
//         url: "/api/employees/:id",
//         method: "GET"
//     }).then(function(response) {
//         $('#employee-card').empty();
        
//         for (let i = 0; i < response.length; i++)
//         {
//             let employeeCard = '<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">' + response[i].FirstName +' '+ response[i].LastName + '</h5><button type="button" class="close" data-dismiss="modal"aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><p id="email">' + response[i].Email + '</p><p id="phoneNumber">' + response[i].PhoneNumber + '</p></div><div class="modal-footer"><button type="button" class="btn btn-secondary"data-dismiss="modal">Close</button><button type="button" class="btn btn-primary"><ahref="' + response[i].Email + '"style="color:aliceblue">Email</a></button></div>';
            
            
//             $('#employee-card').append(employeeCard);
//         }

//     });
// });