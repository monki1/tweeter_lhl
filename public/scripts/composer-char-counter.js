$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    const textareaValue = $(this).val();
    const counter = $(this).next('div').find('.counter');
    counter.text(140 - textareaValue.length);
    // console.log(this, counter, textareaValue);
  });
});
