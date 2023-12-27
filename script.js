var timeBlock = document.querySelector('.container');

$(function () {

  const currentHour = dayjs().format('H');

  function timeColor() {
    $('.time-block').each(function() {
      const blockHour = parseInt(this.id);
      $(this).toggleClass('past', blockHour < currentHour);
      $(this).toggleClass('present', blockHour === currentHour);
      $(this).toggleClass('future', blockHour > currentHour);
    });
  };
  // The code below is for each of the time blocks. They will change color based on the time: past, present and future.
  function replaceColor() {
    $('.time-block').each(function() {
      const blockHour = parseInt(this.id);
      if (blockHour == currentHour) {
        $(this).removeClass('past future').addClass('present');
      } else if (blockHour < currentHour) {
        $(this).removeClass('future present').addClass('past');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    });
  }
  
  // This code is for storing the userdata
function userData() {
  $('.saveBtn').on('click', function () {
    var textValue = $(this).siblings('.description').val();
    var timeKey = $(this).parent().attr('id');
    localStorage.setItem(timeKey, textValue);
  });
};

// This is to recall any and all data from the localstorage
$('#hour6 .description').val(localStorage.getItem('hour6'));
$('#hour7 .description').val(localStorage.getItem('hour7'));
$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));

// Trial run for this block of code along with dayjs. It updates the time from the hours, to the seconds
function updateTime() {
  const dateElement = $('#date');
  const timeElement = $('#time');
  const currentDate = dayjs().format('dddd, MMMM D, YYYY');
  const currentTime = dayjs().format('hh:mm:ss A');
  dateElement.text(currentDate);
  timeElement.text(currentTime);
}


  timeColor();
  replaceColor();
  userData();

  setInterval(updateTime, 1000);
});
