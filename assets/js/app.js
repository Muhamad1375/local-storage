//varriables




//Event Listeners
eventListener();
function eventListener() {
      //Form submission
      document.querySelector('#form').addEventListener('submit', newTweet);
}



//Functions
function newTweet(e) {
      e.preventDefault();
      console.log('Form Submitted');
}