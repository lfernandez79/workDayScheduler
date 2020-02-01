$(document).ready(function () {
    function timeUpdate() {
        $("#currentDay").text(moment().format("dddd, MMMM Do h:mm:ss a"));
    } 
    setInterval(timeUpdate, 1000);
       
    
    // for (let i=8; i<17; i++) {
        // const element = array[i];

        // // Create row
        // var row = $(`<div data-time=${i} id="${i}" class="row">`);

        // // Create a column
        // var column1 = $('<div class="col-sm-2"> <p class="hour">' + formatAMPM(i) + "</p>");

        // //append column to row
        // row.append(column1);

        // // add rows to container
        // // $(".container").append(row);


    // }
})