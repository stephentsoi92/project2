$(document).ready(function() {
    $.ajax({
        url: "/api/tasks",
        method: "GET"
    }).then(function(response) {
        $("tbody").empty();

        for (let i = 0; i < response.length; i++)
        {
            let taskString = '<tr><td>' + response[i].TaskName + '</td>';
            taskString += '<td>' + response[i].Comments + '</td>';
            taskString += '<td><button class="btn btn-primary mb-2 updateTask" id="' + response[i].TaskId + '">Update</button></td>';
            taskString += '<td><button class="btn btn-primary mb-2 deleteTask" id="' + response[i].TaskId + '">Delete</button></td></tr>';
            // console.log(response[i].TaskName, response[i].Comments)
            
            $("tbody").append(taskString);
        }
    });
});

$("body").on("click", ".deleteTask", function() {
    // console.log($(this).attr('id'));
    
    $.ajax({
        url: "/api/tasks/" + $(this).attr("id"),
        method: "DELETE"
    }).then(function(){
        location.reload();
    })
})