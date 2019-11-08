/* eslint-disable space-in-parens */
/* eslint-disable indent */
/* eslint-disable no-undef */
$(document).ready(function () {

  $(".tweet").hover(
    function () {
      const userId = $(this).children('.tweet-header').children('.user-id');
      //add hover to tweets
      $(this).addClass("hover");

      //hover to user id
      userId.show();

    }, function () {
      const userId = $(this).children('.tweet-header').children('.user-id');
      //remove hover from tweets
      $(this).removeClass("hover");

      //remove hover from user id
      userId.hide();

    }
  );

});