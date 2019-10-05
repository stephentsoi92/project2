  // Read the data from database to create dropdown of positions
// $(document).ready(function() {
//     $.ajax({
//         url: "/api/tasks",
//         method: "GET"
//     }).then(function(response) {
//         $("#employeePosition").empty();

//         for (let i = 0; i < response.length; i++)
//         {
//             $("#employeePosition").append('<option value=' + String(response[i].PositionId) + '>' + String(response[i].PositionName) + '</options>');
//         }
//     });
// });

function SendTasksData(tasksData)
{
    $.ajax(
    {
        url: "/api/tasks",
        method: "POST",
        data: tasksData,
    }).then(function(data)
    {
        $('textarea').val('')
    })
};

function ReadTaskForm()
{
    let task = 
    {
      TaskName: $("#taskTitle").val().trim(),
      Comments: $("#taskComment").val().trim()
    };
    
    SendTasksData(task)
}

$("#addNewTaskButton").on('click', function(event) {
    event.preventDefault();
    ReadTaskForm();
});