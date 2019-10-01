// // For testing require jQuery
// var jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = (new JSDOM('')).window;
// global.document = document;

// var $ = jQuery = require('jquery')(window);

// Read the data from database to create dropdown of positions
$(document).ready(function() {
    console.log('Getting data');

    $.ajax({
        url: "http://localhost:3000/api/positions",
        method: "GET"
    }).then(function(response) {

        for (let i = 0; i < response.length; i++)
        {
            console.log('<option value=' + String(response[i].PositionId) + '>' + String(response[i].PositionName) + '</options>');
            // $('.dropdown').append('<option value=' + String(response[i].PositionId) + '>' + String(response[i].PositionName) + '</options>');
        }
    })
});

function readEmployerFormData()
{
    let employee = {
        FirstName: "firstName 2",
        LastName: "lastName 2",
        PhoneNumber: "phoneNumber 2",
        Email: "Email 2",
        Supervisor: false,
        PositionPositionId: 2
        // firstName: $(".exampleFormControlInput1").val().trim(),
        // lastName: $(".exampleFormControlInput1").val().trim(),
        // email: $(".exampleFormControlInput1").val().trim(),
        // phoneNumber: $(".exampleFormControlInput1").val().trim(),
        // positionId: $(".exampleFormControlInput1").val().trim()
    }
    console.log('From reading data ', JSON.stringify(employee))
    return employee;
}

// let dataToSend = readEmployerFormData()

function sendEmployeeData(employeeData)
{
    $.ajax({
        url: "http://localhost:3000/api/employees",
        method: "POST",
        data: employeeData
    }).then(function(data){
        // window.location.href = ''
    });
}

// sendEmployeeData(dataToSend);