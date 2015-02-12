$(document).ready(function(){
    var $feed = $('.feed > ul');
    var numTweetsShown = 0;

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

    //Displays new tweets    
    var showTweets = function(startIndex){
      for(var i = startIndex; i < streams.home.length; i++){
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

    var showUserTweets = function(userToShow){
      for(var i = 0;i < streams.users[userToShow].length; i++){
        var tweet = streams.users[userToShow][i];
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
      showTweets(numTweetsShown);
      $(this).slideUp();
    });

    

    showTweets(numTweetsShown);
    setInterval(checkForTweets, 3000);

    
//Username feed listener
    $('.tweet').on('click', '.username', function(event){
      event.preventDefault;
      var user = $(this).closest('.tweet').data('user');
      $('#user-feed').html("<i class = 'fa fa-home'></i>" + user + "'s Feed");

      $('.tweet').remove();
      showUserTweets(user);

    });

    $('#user-feed').on('click','.fa-home' ,function(){
      $('.tweet').remove();
      $('#user-feed').html('');
      showTweets(0);
    });

    




}); // END document.ready()