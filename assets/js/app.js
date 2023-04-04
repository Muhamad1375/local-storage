//varriables
const tweetList = document.getElementById('tweet-list');

//Event Listeners
eventListener();
function eventListener() {
      //Form submission
      document.querySelector('#form').addEventListener('submit', newTweet);
      //remove tweet from the list
      tweetList.addEventListener('click', removeTweet);
      //document
      document.addEventListener('DOMContentLoaded', localStorageOnLoad);

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
      //print the alert
      alert('Tweet Added');
      this.reset();
}

//removes the tweets from the dom
function removeTweet(e) {
      if(e.target.classList.contains('remove-tweet')) {
            e.target.parentElement.remove();
      }
      //remove from the storage
      removeTweetLocalStorage( e.target.parentElement.textContent );
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
//Prints Local Storage tweets on Load
function localStorageOnLoad() {
      let tweets = getTweetFromStorage();
      //loop throught storage and then print the value
      tweets.forEach(function(tweet) {
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
      });
}
//remove the tweets from the local storage
function removeTweetLocalStorage(tweet) {
      //get tweets from storage
      let tweets = getTweetFromStorage();
      //remove the x from the tweet
      const tweetDelete = tweet.substring(0, tweet.length -1);
      //loop throught the tweets and remove the tweet thats equal
      tweets.forEach(function(tweetLS, index) {
            if (tweetDelete === tweetLS ) {
                  tweets.splice(index, 1);
            }
      });
      //save the data
      localStorage.setItem('tweets', JSON.stringify(tweets));
}