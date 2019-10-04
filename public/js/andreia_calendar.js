// Read the data from database to create dropdown of positions


$(document).ready(function() {
    


    $.ajax({
        url: "/api/calendar",
        method: "GET"
    }).then(function(response) {
        var events = []; //The array

        for(var i =0; i < response.length; i++) 
        {events.push( {

                    title: response[i].title,
                    start: response[i].start,
                    end: response[i].end,
                    extendedProps: {
                  position: response[i].position,
                  phone: response[i].phone,
                  email: response[i].email,
                
                    }
        }
        )}

            
        
        for (let i = 0; i < response.length; i++)
        {
            
            $('#calendar').fullCalendar({
                
                header: {
                  left: 'prev,next today',
                  center: 'title',
                  right: 'month,basicWeek,basicDay'
                },
                defaultDate: '2019-01-01',
                navLinks: true, // can click day/week names to navigate views
                editable: true,
                eventLimit: true, // allow "more" link when too many events
                events: events,
                

                
                
                eventClick: function(calEvent, jsEvent, view, resourceObj) {
                    swal({
                      title: calEvent.title,
                      text: " Shift Information: \n\nStarts at : "+moment(calEvent.start).format("MMMM Do YYYY, h:mm a") + " \nEnds at: "+ moment(calEvent.end).format("MMMM Do YYYY, h:mm a") + "\n\nPosition: " + calEvent.extendedProps.position + "\n\nPhone Number: " + calEvent.extendedProps.phone + "\n\nEmail: " + calEvent.extendedProps.email,
                      icon: "success",
          
                      
                    });
                }
              });
            
        }

    });
    
   
  });
  
