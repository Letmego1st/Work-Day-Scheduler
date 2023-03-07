// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $(".saveBtn").on("click", saveActivity);
  function saveActivity() {
    console.log("saveActivity")
    let activity = $(this).siblings(".description").val();
    let hour = $(this).parent().attr("id");

    localStorage.setItem(hour, activity);
  }
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-1300 .description').val(localStorage.getItem('hour-1300'));
  $('#hour-1400 .description').val(localStorage.getItem('hour-1400'));
  $('#hour-1500 .description').val(localStorage.getItem('hour-1500'));
  $('#hour-1500 .description').val(localStorage.getItem('hour-1500'));
  $('#hour-1600 .description').val(localStorage.getItem('hour-1600'));
  $('#hour-1700 .description').val(localStorage.getItem('hour-1700'));
  $('#hour-1800 .description').val(localStorage.getItem('hour-1800'));
  $('#hour-1900 .description').val(localStorage.getItem('hour-1900'));
  
  // TODO: Add code to display the current date in the header of the page.
  let now=dayjs().format("MM/DD/YYYY");
   console.log(now);
  $('#currentDay').text(dayjs().format("MM/DD/YYYY"));
  $('#currentTime').text(dayjs().format('hh:mm'));

});
