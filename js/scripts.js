$(document).ready(function() {
  $('#contactInfo').submit(function(e1) {
    e1.preventDefault();
    $('.intro').hide();
    $('#firstSet').fadeIn();
  })
  $('#first').submit(function(e2) {
    e2.preventDefault();
    $('#firstSet').hide();
    $('#secondSet').fadeIn();
  })
  $('#second').submit(function(e3) {
    e3.preventDefault();
    $('#secondSet').hide();
    $('#thirdSet').fadeIn();
  })
  $('#third').submit(function(e3) {
    e3.preventDefault();
    $('#thirdSet').hide();
    $('#fourthSet').fadeIn();
  })
  $('#fourth').submit(function(e3) {
    e3.preventDefault();
    $('#fourthSet').hide();
    $('#fifthSet').fadeIn();
  })
})