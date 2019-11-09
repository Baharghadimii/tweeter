/* eslint-disable indent */
/* eslint-disable no-undef */

//escape from XSS(Cross-Site Scripting)
const escape = function (str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//create tweet using user object
const createTweetElement = function (object) {

  //safe text to use for content
  const safeHTML = `<p class="tweet-content">${escape(object.content.text)}</p>`;

  //substitute markup content with data in given object
  const markup = `
  <article class='tweet'>
  <header class='tweet-header'>
      <img class='user-pic' src=${object.user.avatars} />
      <p class='user-name'>${object.user.name}</p>
      <p class='user-id'>${object.user.handle}</p>
  </header>
  ${safeHTML}
  <footer class='tweet-footer'>
      <p>${object.created_at}</p>
      <i class="fas fa-heart icon"></i>
      <i class="fas fa-retweet icon"></i>
      <i class="fas fa-flag icon"></i>
  </footer>
</article>`;

  //return markup
  return markup;
};

//render tweets using array of objects
const renderTweets = function (array) {

  // loops through tweets
  for (const item of array) {

    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    $('.tweets-container').append(createTweetElement(item));
  }
};

//load tweets using ajax
const loadTweets = function () {
  //get method using ajax
  $.ajax('/tweets', { method: 'GET' })
    .then((response) => {
      //check if response exists
      if (!response) {
        alert("Error: not be able to fetch tweets");
      }
      //empty data in container before fetching
      $('.tweets-container').empty();
      renderTweets(response);
    });
};

$(document).ready(function () {

  //render tweets before submission
  loadTweets();

  //Get user input value for validation
  const input = $('#input-field').val();

  //get error elements
  const $errorContent = $('#error-content');
  const $error = $('.error');

  //hide error on default
  $error.slideUp();

  //add onclick event handler
  $('#submit-tweet').submit(function (event) {

    //prevent page from refreshing for fetching data
    event.preventDefault();

    //text in input filed
    const input = $('#input-field').val();

    //set error message not shown in default
    const $errorContent = $('#error-content');
    const $error = $('.error');
    $error.slideUp();

    //check if text length doesn't exceed more than 140 characters
    if (input.length >= 140) {

      //show error message
      $error.slideDown();
      $errorContent.text(`Too Long! It shouldn't exceed more than 140 characters!!!`);

      //check if user has typed anything
    } else if (input.length === 0) {

      //show error message
      $error.slideDown();
      $errorContent.text(`You didn't type anything yet!!!`);

    } else {
      //fetching tweets using ajax post
      $.ajax({
        url: `/tweets`,
        datatype: 'JSON',
        method: 'POST',
        data: $(this).serialize(),
        success: (function (data) {
          //render tweets after adding data to database
          loadTweets();
        })
      });
    }
    //clear text field and add focus
    $('#submit-tweet').trigger("reset");
    $('.counter').text("140");
    $('textarea').focus();



  });
}

);



