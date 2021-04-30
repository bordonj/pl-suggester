$(document).ready(function() {
  $('#contactInfo').submit(function(e1) {
    e1.preventDefault();
    $('.intro').hide();
    $('#firstSet').fadeIn();
  })
})