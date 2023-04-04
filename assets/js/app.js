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
      //add to local storage
      addTweetLocalStorage(tweet);
}

//removes the tweets from the dom
function removeTweet(e) {
      if(e.target.classList.contains('remove-tweet')) {
            e.target.parentElement.remove();
      }
}
//add tweet to local storage
function addTweetLocalStorage(tweet) {
      let tweets = getTweetFromStorage();
      //add the tweet into the array
      tweets.push(tweet);
      //convert tweet array into string
      localStorage.setItem('tweets', JSON.stringify(tweets) );
}
function getTweetFromStorage() {
      let tweets;
      const tweetsLS = localStorage.getItem('tweets');
      //get the value if null is returnes then we create an empty array
      if (tweetsLS === null) {
            tweets=[];
      } else {
            tweets = JSON.parse( tweetsLS );
      }
      return tweets;
}