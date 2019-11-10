/* eslint-disable no-undef */
$(document).ready(function() {
  //get input text
  const $input = $('textarea');
  //get counter element
  const $counter = $('.counter');

  //event listener for changing counter for input characters
  $input.on('input', function() {
    const count = 140 - $input.val().length;

    //if input charachters exceed more than 140
    if (count <= 0) {
      $counter.addClass('counter_error');
    } else {
      $counter.removeClass('counter_error');
    }
    $counter.text(count);
  });

});