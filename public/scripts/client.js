/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetObj =  {
    "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
    },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
};



$(document).ready(function() {
    $(this).find(`main.container`).append(createTweetElement(tweetObj));
});

// ajax submit form
//1. prevent default
$(document).ready(function() {
    $('form.new-tweet-form').on('submit', function(event) {
        event.preventDefault();
        // console.log(this);
        // Serialize the form data
        const serializedData = $(this).serialize();

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
    });
});
