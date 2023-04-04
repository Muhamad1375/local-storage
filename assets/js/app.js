//varriables
const tweetList = document.getElementById('tweet-list');

//Event Listeners
eventListener();
function eventListener() {
      //Form submission
      document.querySelector('#form').addEventListener('submit', newTweet);
      //remove tweet from the list
      tweetList.addEventListener('click', removeTweet);

}

//Functions
function newTweet(e) {
      e.preventDefault();
      //read the textarea value
      const tweet = document.getElementById('tweet').value;
      //create the remove button
      const removeBtn = document.createElement('a');
      removeBtn.classList = 'remove-tweet';
      removeBtn.textContent = 'X';
      //create an li element
      const li = document.createElement('li');
      li.textContent = tweet;
      // add remove button to each tweet
      li.appendChild(removeBtn)
      //add to the list
      tweetList.appendChild(li);
}

//removes the tweets from the dom
function removeTweet(e) {
      if(e.target.classList.contains('remove-tweet')) {
            e.target.parentElement.remove();
      }