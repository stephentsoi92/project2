// Read the data from database to create dropdown of positions
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
            rowString += '<td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Contact Card </button></td></tr>';
            
            $('tbody').append(rowString);
        }

    });
});