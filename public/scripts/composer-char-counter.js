$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    const textareaValue = $(this).val();
    const counter = $(this).next('div').find('.counter');
    const remaining = 140 - textareaValue.length;
    counter.text(remaining);
    // if reamining is less than 0, add class 'counter-over-limit' else remove class 'counter-over-limit'
    const overLimitClass = 'counter-over-limit';
    if (remaining < 0) {
        counter.addClass(overLimitClass);
    }else{
        counter.removeClass(overLimitClass);
    }
    // console.log(this, counter, textareaValue);
  });
});
