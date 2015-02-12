$(document).ready(function(){
    var $feed = $('.feed > ul');
    var numTweetsShown = 0;

    // $body.html('');

    //Originally Populates Inital Stream
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $("<li class = 'tweet'></li>");      
      $tweet.html("<p class = 'username'> @" + tweet.user + ":</p> <p class = 'message'> " +
        tweet.message + "</p> <p class= 'mini'>"+ tweet.created_at + '</p>');
      $tweet.data('user', tweet.user );
      $tweet.prependTo($feed);
      index -= 1;
      numTweetsShown++;
    }//END while


    // Populates Friends List
    for(var i = 0; i < users.length; i++){
      var $user = $('<li></li>');
      $user.text(users[i]);
      $user.appendTo($('.friends').find('ul'));
    }
    
    //Checks to see if there are new tweets
    var checkForTweets = function(){
      if(numTweetsShown < streams.home.length){
          $('#refresh').last().find('#numTweets').html(streams.home.length - numTweetsShown);
          $('#refresh').slideDown(); 
      }
    }

    var showAllTweets = function(){
      for(var i = 0; i < streams.home.length; i++){
        var tweet = streams.home[i];
        var $tweet = $("<li class = 'tweet'></li>");
        
        $tweet.css('display','none');
        $tweet.html("<p class = 'username'> @" + tweet.user + ":</p> <p class = 'message'> " +
          tweet.message + "</p> <p class= 'mini'>"+ tweet.created_at + '</p>');
        $tweet.data('user', tweet.user );
        $tweet.prependTo($feed);
        numTweetsShown++;
        $tweet.slideDown();
        $tweet.fadeIn();
      }
    };

    //Displays new tweets
    
    var showTweets = function(){
      for(var i = numTweetsShown; i < streams.home.length; i++){
        var tweet = streams.home[i];
        var $tweet = $("<li class = 'tweet'></li>");
        
        $tweet.css('display','none');
        $tweet.html("<p class = 'username'> @" + tweet.user + ":</p> <p class = 'message'> " +
          tweet.message + "</p> <p class= 'mini'>"+ tweet.created_at + '</p>');
        $tweet.data('user', tweet.user );
        $tweet.prependTo($feed);
        numTweetsShown++;
        $tweet.slideDown();
        $tweet.fadeIn();
      }
    };

    //Refresh Event Listener
    $('#refresh').on('click', function(event){
          event.preventDefault();
          showTweets()
          $(this).slideUp();
        })

    $('#home').on('click', function(event){
          event.preventDefault();
          $('.tweet').remove();
          showAllTweets()
          var feedName = $('.main-feed').find('h2');
          feedName.html("Main Feed");
        })

    //Changes Feeds
    $('.username').on('click',function(){
      var user = $(this).closest('.tweet').data('user');
      var feedName = $('.main-feed').find('h2');
      feedName.html("<i class = 'fa fa-home fa-2x'></i>   "+  user);



    });
    

    setInterval(checkForTweets, 3000);




}); // END document.ready()