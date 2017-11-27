const express = require("express");
const port = process.env.PORT || 8080;
const app = express();
const bodyParser = require("body-parser");
const table = require("../Database/index.js");
const context = table.knex;
const moment = require("moment");
var now = moment();
let artistId = "";
let userId = "";
const saveUser = require("../Database/dbFunction.js").saveUser;
const checkArtistTable = require("../Database/dbFunction.js").checkArtistTable;
const checkUsersTable = require("../Database/dbFunction.js").checkUsersTable;
const getArtists = require("../Database/dbFunction.js").getArtists;
const getTracks = require("../Database/dbFunction.js").getTracks;

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/dist"));

app.post("/initArtists", (req, res) => {
  let city = req.body.city;
  getArtists(city).then(artists => {
    res.json(artists);
  });
});

app.post("/initTracks", (req, res) => {
  let artist = req.body.artist;
  getTracks(artist).then(tracks => {
    res.json(tracks);
  });
});

app.post("/user", (req, res) => {

  let input = {}
  input.artist = req.body.artist;
  input.message = req.body.message;
  input.user = req.body.user;
  // retrieve id for artist and user
  table.Artist.forge()
    .query()
    .select("id")
    .where("username", "=", input.artist)
    .then(function(model) {
      artistId = model[0].id;
      table.User.forge()
	    .query()
	    .select("id")
	    .where("username", "=", input.user)
	    .then(function(model) {
	      userId = model[0].id;
	      console.log('inside of test');
	    })
	    .then(function(){ 
	    	// posting data 
	    	new table.Requested_Gigs({ 
				artist_id: artistId,
				user_id: userId,
				message: input.message,
			})
			.save()
			.then(function() {
				context.destroy();
			})
			.catch((err)=>{ console.log("ERROR: ", err)})
	    })
	})
  // new table.User({
  // username: 'Aygerim Test',
  // role: 'f'
  // }).save()
  // .then(function() {
  //     context.destroy();
  //   })
  res.status(201).send("hello");
});

app.post("/initialLogin", (req, res) => {
  let token = req.body.accessToken;
  let name = req.body.username;
  let facebookID = req.body.facebookID;

  //check if user is an artist in our "artist" table
  checkArtistTable(name)
    .then(userObj => {
      console.log("userObj is ", userObj);
      let bool = true;
      if (userObj !== null && userObj.length > 0) {
        bool = true;
      } else {
        bool = false;
      }
      //save user into users database
      saveUser(name, token, facebookID, bool);
    })
    .then(() => {
      res.send();
    });
});

app.post("/userCheck", (req, res) => {
  let facebookID = req.body.facebookId;
  checkUsersTable(facebookID).then(userObj => {
    res.json(userObj);
  });
});

app.listen(port, () => {
  console.log("Listening on port ", port);
});
