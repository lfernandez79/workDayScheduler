$(document).ready(function () {
    
    // append time to the page and function to update dynamically
    function timeUpdate() {
        $("#currentDay").text(moment().format("dddd, MMMM Do h:mm:ss a"));
    } 
    setInterval(timeUpdate, 1000);
          
    // loop to create rows  from 8 to 5 PM
    for (let i=8; i<18; i++) {

        // Create row with loop above
        var row = $(`<div data-time=${i} id="${i}" class="row">`);

        // Create a columns
        var column1 = $('<div class="col-md-2 bg-light mb-4 text-center text-success"> <h3 class="hour">' + currentTime(i) + "</h3>");
        var column2 = $(`<div class="col-md-8"><textarea id=text${i} class="col-md-12 bg-light description" placeholder="To do item"></textarea>`);
        var column3 = $(`<button class="saveButton col-sm-12 col-md-6 col-lg-1 mb-1 btn btn-danger" id=${i}><i class="fas fa-cloud fa-lg"></i></button>`);
        
        //append column to row
        row.append(column1, column2, column3);
       
        // add rows to container
        $(".container").append(row);


    }
    
    // Display dateTime in 12 hours with AM/PM format on column1
    function currentTime(event) {
        var time = event >= 12 ? " PM" : " AM";
        event = event % 12;
        event = event ? event : 12;
        return event + time;
    }

    // var saveBtn = $(".saveButton");
    $(".saveButton").on("click", function() {
        var eventText = (this).parent().children(".description").val();
        localStorage.setItem(eventText);

    } )
})

