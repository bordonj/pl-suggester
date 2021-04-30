//business logic
let jsCount = 0;
let csCount = 0;
let rubyCount = 0;

let tally = (answer) => {
  if (answer === 'js') {
    jsCount++;
  } else if (answer === 'cs') {
    csCount++;
  } else if (answer === 'ruby') {
    rubyCount++;
  }
}

//UI logic

$(document).ready(function() {
let userName;
let userEmail;
  $('#contactInfo').submit(function(e1) {
    e1.preventDefault();
    userName = $('input#fullName').val();
    userEmail = $('input#contact').val();

    $('.intro').hide();
    $('#firstSet').fadeIn();
  })

  $('#first').submit(function(e2) {
    e2.preventDefault();
    const firstAnswer = $('input:radio[name=first]:checked').val();
    tally(firstAnswer);

    $('#firstSet').hide();
    $('#secondSet').fadeIn();
  })

  $('#second').submit(function(e3) {
    e3.preventDefault();
    const secondAnswer = $('input:radio[name=second]:checked').val();
    tally(secondAnswer);

    $('#secondSet').hide();
    $('#thirdSet').fadeIn();
  })

  $('#third').submit(function(e4) {
    e4.preventDefault();
    const thirdAnswer = $('input:radio[name=third]:checked').val();
    tally(thirdAnswer);

    $('#thirdSet').hide();
    $('#fourthSet').fadeIn();
  })

  $('#fourth').submit(function(e5) {
    e5.preventDefault();
    const fourthAnswer = $('input:radio[name=fourth]:checked').val();
    tally(fourthAnswer);

    $('#fourthSet').hide();
    $('#fifthSet').fadeIn();
  })

  $('#fifth').submit(function(e6) {
    e6.preventDefault();
    const fifthAnswer = $('input:radio[name=fifth]:checked').val();
    tally(fifthAnswer);
    $('.name').text(userName);
    $('.email').text(userEmail);
    

    $('#fifthSet').hide();
    if (jsCount > csCount && jsCount > rubyCount) {
      $('#javaScript').fadeIn();
      $('#language').text('JavaScript');
      $('#result').fadeIn();
    } else if (csCount > jsCount && csCount > rubyCount) {
      $('#cSharp').fadeIn();
      $('#language').text('C#');
      $('#result').fadeIn();
    } else if (rubyCount > jsCount && rubyCount > csCount){
      $('#ruby').fadeIn();
      $('#language').text('Ruby');
      $('#result').fadeIn();
    } else {
      $('#result').hide();
      $('#noPref').fadeIn();

    }
  })
})