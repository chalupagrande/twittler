$(document).ready(function(){
    var $feed = $('.feed > ul');
    var numTweetsShown = 0;

    // Populates Friends List
    for(var i = 0; i < users.length; i++){
      var $user = $("<li class = 'username'></li>");
      $user.text(users[i]);
      $user.data('user', users[i]);
      $user.appendTo($('.friends').find('ul'));
    }
    
    //Checks to see if there are new tweets
    var checkForTweets = function(){
      if(numTweetsShown < streams.home.length && $('#user-feed').data('user') === 'home'){
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
      userEventListener();
    };

    var showUserTweets = function(userToShow){
      for(var i = 0;i < streams.users[userToShow].length; i++){
        var tweet = streams.users[userToShow][i];
        var $tweet = $("<li class = 'tweet'></li>");
        
        $tweet.css('display','none');
        $tweet.html("<p class = 'username'> @" + tweet.user + ":</p> <p class = 'message'> " +
          tweet.message + "</p> <p class= 'mini'>"+ tweet.created_at + '</p>');
        $tweet.data('user', tweet.user );
        $('#user-feed').data('user', tweet.user);
        $tweet.prependTo($feed);
        numTweetsShown++;
        $tweet.slideDown();
        $tweet.fadeIn();
      } 
      userEventListener();

    };

    //Refresh Event Listener
    $('#refresh').on('click', function(event){
      event.preventDefault();
      showTweets(numTweetsShown);
      $(this).slideUp();
    });

  var userEventListener = function(){
    $('.tweet').on('click', '.username', function(event){
      event.preventDefault;
      var user = $(this).closest('.tweet').data('user');
      $('#user-feed').html("<i class = 'fa fa-home'></i>    " + user + "'s Feed");

      $('.tweet').remove();
      showUserTweets(user);
    });
  };

  $('.friends').on('click', '.username', function(event){
      event.preventDefault;
      var user = $(this).data('user');
      $('#user-feed').html("<i class = 'fa fa-home'></i>" + user + "'s Feed");

      $('.tweet').remove();
      showUserTweets(user);
    });


  $('#user-feed').on('click','.fa-home' ,function(){
      $('.tweet').remove();
      $('#user-feed').html('Main Feed');
       $('#user-feed').data('user', 'home');
      showTweets(0);
    });

    showTweets(numTweetsShown);
    setInterval(checkForTweets, 3000);

    
//Username feed listener
  

    

    




}); // END document.ready()