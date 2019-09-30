document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    
    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
      defaultView: 'listweek',
      defaultDate: '2019-09-07',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [
        {
          title: 'All Day Event',
          start: '2019-09-01'
        },
        {
          title: 'Long Event',
          start: '2019-09-07',
          end: '2019-09-10'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2019-09-09T16:00:00'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2019-09-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2019-09-11',
          end: '2019-09-13'
        },
        {
          title: 'Meeting',
          start: '2019-09-12T10:30:00',
          end: '2019-09-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2019-09-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2019-09-12T14:30:00'
        },
        {
          title: 'Birthday Party',
          start: '2019-09-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2019-09-28'
        }
      ]
    });
  
    calendar.render();
  });