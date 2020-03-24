// Loads all the containing functionality when the page loads
$(document).ready(function() {

    // Runs when any button with a class of "savBtn" is clicked
    $(".saveBtn").on("click", function() {

        // Saves content of the sibling <textarea> of whichever button is clicked
        var descriptionValue = $(this).siblings(".description").val();

        // Saves the id value (ex. "hour-x") of the clicked button's parent div
        var hour = $(this).parent().attr("id");

        // Sets previous two variables in Local Storage, using the hour number as a key and the text content as the value
        localStorage.setItem(hour, descriptionValue);
    })

    function hourTracker() {

        // Sets current time in hours using the moment library
        var currentHour = moment().hours();
        
        // Loops through time block row
        $(".time-block").each(function() {

            // Takes the row id (ex. "hour-x"), splits to an array, converts string at [1] to integer, saves as variable
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            
            // Changes row color if its hour is yet to come
            if (blockHour > currentHour) {
                $(this).addClass("future")
            }

            // Changes row color if its hour matches current time
            else if (blockHour === currentHour) {
                $(this).removeClass("future");
                $(this).addClass("present");
            }

            // Changees row color to indicate the hour has passed
            else {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
        })

    }

// Calls hourUpdater function when page loads 
hourTracker();

// Uses jQuery descendant selectors to set the <textarea> content as whatever is saved in Local Storage upon loading
$("#hour-9 .description").val(localStorage.getItem('hour-9'));
$("#hour-10 .description").val(localStorage.getItem('hour-10'));
$("#hour-11 .description").val(localStorage.getItem('hour-11'));
$("#hour-12 .description").val(localStorage.getItem('hour-12'));
$("#hour-13 .description").val(localStorage.getItem('hour-13'));
$("#hour-14 .description").val(localStorage.getItem('hour-14'));
$("#hour-15 .description").val(localStorage.getItem('hour-15'));
$("#hour-16 .description").val(localStorage.getItem('hour-16'));
$("#hour-17 .description").val(localStorage.getItem('hour-17'));

// Uses moment to format date and store as variable
var dateDisplay = moment().format("dddd, MMMM Do YYYY");

// Updates the jumbotron with the current date
$("#currentDay").text(dateDisplay);

});