

const tweetCounterValidation = function() {

  let counterValue = $('output[name="counter"].counter[for="tweet-text"]').text();
  // console.log(typeof counterValue)
  console.log(counterValue, parseInt(counterValue) >= 0);
  return parseInt(counterValue) >= 0;

};