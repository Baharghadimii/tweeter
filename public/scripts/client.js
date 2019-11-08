/* eslint-disable indent */
/* eslint-disable no-undef */

//create tweet using user object
const createTweetElement = function (object) {

  //substitute markup content with data in given object
  const markup = `
  <article class='tweet'>
  <header class='tweet-header'>
      <img class='user-pic' src=${object.user.avatars} />
      <p class='user-name'>${object.user.name}</p>
      <p class='user-id'>${object.user.handle}</p>
  </header>
  <p class="tweet-content">${object.content.text}</p>
  <footer class='tweet-footer'>
      <p>${object.created_at}</p>
      <img class='icon' src="/images/like.png" />
      <img class='icon' src="/images/retweet.png" />
      <img class='icon' src="/images/flag.png" />
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
      renderTweets(response);
    });
};

$(document).ready(function () {

  //render tweets before submission
  loadTweets();

});


