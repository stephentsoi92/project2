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
            rowString += '<td><button data-id="'+response[i].EmployeeId+'" type="button" data-toggle="modal" data-target="#exampleModal" class="btn btn-primary contact-card-btn">Contact Card</button></td></tr>';
            
            $('tbody').append(rowString);
        }

    });
});

$('body').on("click", ".contact-card-btn", function (){
    $.ajax({
        url: "/api/employees/"+$(this).data("id"),
        method: "GET"
    }).then(function(response) {
        $('#name-contact').empty();
        $('#modal-contact-card').empty();

        let updateCardName = '<h5 class="modal-title" id="exampleModalLabel name-contact">' + response.FirstName + ' ' + response.LastName + '</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
        $('#name-contact').append(updateCardName);
            
        let modalCard = '<p>' + response.Email + '</p><p>'+ response.PhoneNumber +'</p>';
        $('#modal-contact-card').append(modalCard);

        // for (let i = 0; i < response.length; i++)
        // {
        //     let updateCardName = '<h5 class="modal-title" id="exampleModalLabel name-contact">' + response[i].FirstName + ' ' + response[i].LastName + '</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
        //     $('#name-contact').html(updateCardName);
            
        //     let modalCard = '<p>' + response[i].Email + '</p><p>'+ response[i].PhoneNumber +'</p>';
        //     $('#modal-contact-card').append(modalCard);
        // }
    });
})