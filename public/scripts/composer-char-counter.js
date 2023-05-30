$(document).ready(function() {
  $('#tweet-text').on('input', syncCounter);
});

function syncCounter() {
  const textareaValue = $('#tweet-text').val();
  const counter = $('#tweet-text').next('div').find('.counter');
  const remaining = 140 - textareaValue.length;
  counter.text(remaining);

  const overLimitClass = 'counter-over-limit';
  if (remaining < 0) {
    counter.addClass(overLimitClass);
  } else {
    counter.removeClass(overLimitClass);
  }
  
  // Additional code specific to the syncCounter function...
}