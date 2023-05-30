const loadTweets = function() {
  // Use jQuery's $.ajax() function to make a GET request to the /tweets endpoint

  $.ajax({
    url: '/tweets',
    method: 'GET',
    dataType: 'json',
    success: function(response) {
      // Success callback function
      console.log('Tweets loaded successfully');
      console.log('Response:', response);

      // Render the tweets on the page
      const $tweetsContainer = $('main.container');
      const tweets = response; // Assuming the response is an array of tweets
      
      const $tweetElements = renderTweets(tweets);
      console.log(tweets);
      $tweetsContainer.append($tweetElements);

    },
    error: function(xhr, status, error) {
      // Error callback function
      console.log('Error occurred while loading tweets');
      console.log('Status:', status);
      console.log('Error:', error);
    }
  });
};