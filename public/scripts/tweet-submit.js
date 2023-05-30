
const tweetSubmitFormListener = function() {
  $(document).ready(function() {
    $('form.new-tweet-form').on('submit', function(event) {
      event.preventDefault();
      // alert();
      // console.log(this);
      const serializedData = $(this).serialize();

      // Serialize the form data

      // counterValue = $('output[name="counter"].counter[for="tweet-text"]').text();
      const textarea = $(`#tweet-text`);
    
      if (!tweetCounterValidation() || textarea.val() === "") {
        alert("no");
        return;
      }


      // console.log(serializedData);

      // Submit form data using $.ajax()
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: serializedData,
        success: function(response) {
          // Success callback function
          console.log('Form submitted successfully');
          console.log('Response:', response);
        },
        error: function(xhr, status, error) {
          // Error callback function
          console.log('Error occurred while submitting the form');
          console.log('Status:', status);
          console.log('Error:', error);
        }
      });
      
      textarea.val('');
      removeTweets();
      loadTweets();
      syncCounter();



    });
  });
};