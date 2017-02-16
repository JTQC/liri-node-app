//Initalize inquirer so we have a semi-attractive gui
var inquirer = require("inquirer");

//Initalize Twitter NPM
var Twitter = require("twitter");
var twitterKeys = require("./keys");
// var client = twitterKeys;

// //Initalize Spotify
var spotify = require('spotify');

// //Initalize Movie DB
// var request = require('request');

//Twitter Function
function twitterFunction(){
	var client = new Twitter({
	  consumer_key: '',
	  consumer_secret: '',
	  access_token_key: '',
	  access_token_secret: ''
	});
	var params = {screen_name: 'nodejs'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  	if (!error) {
    console.log(tweets);
  	}
  });
};



//Movie Function

// function movieDbFunction(){

// }

//DWIS function




inquirer.prompt([

{
	type: "list",
	message: "What would you like to search?",
	choices: ["My Tweets", "Spotify", "Movie", "Do-What-It-Says"],
	name: "choice"

}
	]).then(function(user){
		
// 		//-----------------------------
// 		//Twitter Functions
		if (user.choice === "My Tweets") {
			// console.log("you chose Twitter");
			twitterFunction();
		}
// 		//End Twitter
// 		//---------------------------------


// 		//---------------------------------
// 		//Spotify Function
		else if (user.choice === "Spotify") {
		
			inquirer.prompt([
		
			{
				type: "input",
				message: "Artist Name?",
				name: "artist"
			},

			{
				type: "input",
				message: "Song Name",
				name: "song"
			}

			]).then(function spotifyFunction(){
		spotify.search({ type: "user.artist", query: "user.song" }, function(err, data) {
    	if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    	}
    	});
    	});
    	}	
// });

		// });
		
		else if (user.choice === "Movie") {
			console.log("You chose Movie");
		}

		else if (user.choice === "Do-What-It-Says")
			console.log("You chose DWITS");
		});
