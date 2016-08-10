var twitter = require('twitter');

var client = new twitter({
  consumer_key: '<generate_your_own>',
  consumer_secret: '<generate_your_own>',
  access_token_key: '<generate_your_own>',
  access_token_secret: '<generate_your_own>'
});

var search = "#Trump";

client.stream('statuses/filter', {track: search}, function(stream){
    stream.on('data', function (tweet){
        console.log(tweet.text);
    });
    
    stream.on('error', function (err){
        console.error(err);
    });
});