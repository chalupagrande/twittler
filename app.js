$(document).ready(function(){
    var $body = $('.feed > ul');
    // $body.html('');

    // Populates Friends List
    for(var i = 0; i < users.length; i++){
      var $user = $('<li></li>');
      $user.text(users[i]);
      $user.appendTo($('.friends').find('ul'));
    }

    //Populates Stream
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<li></li>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message);
      $tweet.appendTo($body);
      index -= 1;
    }//END while

}); // END document.ready()