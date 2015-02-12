$(document).ready(function(){
    var $feed = $('.feed > ul');
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
        $tweet.html('@' + tweet.user + ': ' + tweet.message + "<br> <span class= 'mini'>"+ tweet.created_at + '</span>');
        $tweet.prependTo($feed);
        index -= 1;
        tweetsShown++;
      }
    };


    //Originally Populates Inital Stream
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<li></li>');
      $tweet.html('@' + tweet.user + ': ' + tweet.message + "<br> <span class= 'mini'>"+ tweet.created_at + '</span>');
      $tweet.prependTo($feed);
      index -= 1;
      tweetsShown++;
    }//END while

    $('#refresh').on('click', function(event){
      event.preventDefault();
      checkForTweets()
    })

}); // END document.ready()