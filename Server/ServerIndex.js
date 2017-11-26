const express = require("express");
const port = process.env.PORT || 8080;
const app = express();
const bodyParser = require("body-parser");
const table = require("../Database/index.js");
const context = table.knex;
const moment = require("moment");
var now = moment();
var a = 0;
let artistId = "";
let userId = "";
const saveUser = require("../Database/dbFunction.js").saveUser;
const checkArtistTable = require("../Database/dbFunction.js").checkArtistTable;
const checkUsersTable = require("../Database/dbFunction.js").checkUsersTable;

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/dist"));

app.post("/user", (req, res) => {
  ++a;
  var formatted = now.format("YYYY-MM-DD HH:mm:ss Z");

  let input = { artist: "", message: "" };
  input.artist = req.body.artist;
  input.message = req.body.message;
  input.user = req.body.user;
  console.log("right now", formatted);
  // retrieve id for user and artist

  table.Artist.forge()
    .query()
    .select("id")
    .where("username", "=", input.artist)
    .then(function(model) {
      artistId = model[0].id;
      console.log("artist id", artistId);
    })
    .then(function() {
      context.destroy();
    });

  table.User.forge()
    .query()
    .select("id")
    .where("username", "=", input.user)
    .then(function(model) {
      userId = model[0].id;
      console.log("user id", userId);
    })
    .then(function() {
      context.destroy();
    });
  console.log("a ---> ", a);
  // SAVING MESSAGES
  //  id | name | artist_id | date_id | user_id | message
  new table.Requested_Gigs({
    name: "testing",
    artist_id: Number(artistId),
    user_id: Number(userId),
    message: input.message,
    date_id: Number(a)
  })
    .save()
    .then(function() {
      context.destroy();
    });

  //TESTING
  // new table.Requested_Gigs({
  //  	name: 'aygerim test',
  //  	artist_id: 10,
  //  	user_id: 3,
  //  	message: "hello world",
  //  	date_id: 10
  //  		})
  // .save()
  // .then(function() {
  // context.destroy();
  // })

  // new table.User({
  // username: 'Aygerim Test',
  // role: 'f'
  // }).save()
  // .then(function() {
  //     context.destroy();
  //   })

  console.log("all --> ", input);
  res.status(201).send("hello");
});

app.post("/initialLogin", (req, res) => {
  let token = req.body.accessToken;
  let name = req.body.username;
  let facebookID = req.body.facebookID;

  //check if user is an artist in our "artist" table
  checkArtistTable(name)
    .then(userObj => {
      let bool = true;
      if (userObj !== null) {
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
    res.send(userObj);
  });
});

app.listen(port, () => {
  console.log("Listening on port ", port);
});
