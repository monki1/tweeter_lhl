
const createTweetElement = function(tweetObj) {
  // Create the article element and add the "tweet" class
  const $article = $('<article>').addClass('tweet');

  // Create the header element and add the "tweet-header" class
  const $header = $('<header>').addClass('tweet-header');

  // Create the user profile section with the "user-profile" class
  const $userProfile = $('<div>').addClass('user-profile');

  // Create the user icon element and set the "user-icon" class and the source from the tweetObj
  const $userIcon = $('<img>').addClass('user-icon').attr('src', tweetObj.user.avatars);

  // Create the user name element with the "user-name" class and set the text from the tweetObj
  const $userName = $('<p>').addClass('user-name').text(tweetObj.user.name);

  // Create the user handle element with the "user-handle" class and set the text from the tweetObj
  const $userHandle = $('<p>').addClass('user-handle').text(tweetObj.user.handle);

  // Append the user icon and user name elements to the user profile section
  $userProfile.append($userIcon, $userName);

  // Append the user profile section and user handle element to the header element
  $header.append($userProfile, $userHandle);

  // Create the tweet text element with the "tweet-text" class and set the text from the tweetObj
  // use text node instead of jquery to avoid xss
  const $tweetText = $('<div>').addClass('tweet-content').text(tweetObj.content.text);

  // Create the footer element with the "tweet-footer" class
  const $footer = $('<footer>').addClass('tweet-footer');

  // Create the tweet date element with the "tweet-date" class and format the date using moment.js
  const $tweetDate = $('<span>').addClass('tweet-date').text(timeago.format(tweetObj.created_at));

  // Create the tweet response section with the "tweet-response" class
  const $tweetActionsDiv = $('<div>').addClass('tweet-actions');

  // Create the flag icon element with the "fas fa-flag" classes
  const $flagIcon = $('<i>').addClass('fas fa-flag');

  // Create the retweet icon element with the "fas fa-retweet" classes
  const $retweetIcon = $('<i>').addClass('fas fa-retweet');

  // Create the heart icon element with the "fas fa-heart" classes
  const $heartIcon = $('<i>').addClass('fas fa-heart');

  // Append the flag, retweet, and heart icons to the tweet response section
  $tweetActionsDiv.append($flagIcon, $retweetIcon, $heartIcon);

  // Append the tweet date and tweet response section to the footer element
  $footer.append($tweetDate, $tweetActionsDiv);

  // Append the header, tweet text, and footer elements to the article element
  $article.append($header, $tweetText, $footer);

  // Return the completed article element
  return $article;
};

const renderTweets = (tweets) => tweets.map(tweet => createTweetElement(tweet));

