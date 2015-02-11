$(document).ready(function(){
    var $body = $('.feed > ul');
    // $body.html('');

    // Populates Friends List
    for(var i = 0; i < users.length; i++){
      var $user = $('<li></li>');
      $user.text(users[i]);
      $user.appendTo($('.friends').find('ul'));
    }

    var tweetsShown = 0;
    var checkForTweets = function(){
      for(var i = tweetsShown; i < streams.home.length; i++){
        var tweet = streams.home[i];
        var $tweet = $('<li></li>');
        $tweet.text('@' + tweet.user + ': ' + tweet.message);
        $tweet.prependTo($body);
        tweetsShown++;
      }
    };


    //Populates Inital Stream
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<li></li>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message);
      $tweet.prependTo($body);
      index -= 1;
      tweetsShown++;
    }//END while

    setInterval(checkForTweets, 5000);

}); // END document.ready()