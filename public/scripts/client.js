/* eslint-disable indent */
/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//database
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];
const renderTweets = function (array) {
  // loops through tweets
  for (const item of array) {
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    $('#tweets-container').prepend(createTweetElement(item));
  }
};

const createTweetElement = function (object) {

  //substitute markup content with data in given object
  const markup = `
  <article class='tweet'>
  <header class='tweet-header'>
      <img id='user-pic' src=${object.user.avatars} />
      <p id='user-name'>${object.user.name}</p>
      <p id='user-id'>${object.user.handle}</p>
  </header>
  <p class='tweet-content'>${object.content.text}</p>
  <footer id='tweet-footer'>
      <p>${object.created_at}</p>
      <img id='icon' src="/icon/like.png" />
      <img id='icon' src="/icon/retweet.png" />
      <img id='icon' src="/icon/flag.png" />
  </footer>
</article>`;

  //return markup
  return markup;
};

$(document).ready(function () {

  //render tweets using our global database
  renderTweets(data);
});


