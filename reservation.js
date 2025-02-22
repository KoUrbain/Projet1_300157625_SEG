$(document).ready(function() {
    
    // Initialize FullCalendar
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        // Sample events (these will display as existing events)
        events: [
            {
                title: 'Consultation 1',
                start: '2025-12-01'
            },
            {
                title: 'Consultation 2',
                start: '2025-12-02'
            }
        ],
        // Allow users to click a date to add an event
        dayClick: function(date, jsEvent, view) {
            // Prompt user for the event title
            var eventTitle = prompt("Enter a title for the reservation:");

            if (eventTitle) {
                // Add event to the calendar
                $('#calendar').fullCalendar('renderEvent', {
                    title: eventTitle,
                    start: date,
                    allDay: true
                });
            }
        }
    });
});
