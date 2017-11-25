const pg = require("pg");

// console.log('TEST ID', SFArtistTopTracks['Bassnectar'][0].id);
var connection =
  `${process.env.DATABASE_URL}/artists` ||
  "postgres://postgres:rebase@localhost:5432/artists";

var knex = require("knex")({
  client: "pg",
  connection: connection
});

// Client var to do raw sql queries for joins between tables
// let client = new pg.Client(connection);
// client.connect();

let bookshelf = require('bookshelf')(knex);

let Artist = bookshelf.Model.extend({
	tableName: 'artist'
	// single: function() {
	// 	return this.hasMany(single);
	// }
});

let Date = bookshelf.Model.extend({
  tableName: "date"
});

let Artist_Availability = bookshelf.Model.extend({
  tableName: "artist_availability"
});

let Requested_Gigs = bookshelf.Model.extend({
  tableName: "requested_gigs"
});

let Single = bookshelf.Model.extend({
  tableName: "single"
});


module.exports.Artist = Artist;
module.exports.Date = Date;
module.exports.Artist_Availability = Artist_Availability;
module.exports.Requested_Gigs = Requested_Gigs;
module.exports.Single = Single;


// Example of populating the data (Uses promises)
// new Artist({
// 	username: 'xan',
// 	city: 'xan',
// 	country: 'xan'
// }).save().then(function() {
// 	knex.destroy();
// });

// Destroys/Ends connection
// knex.destroy();

/*
	TO CONNECT VIA TERMINAL (password might be different for each user)

	psql -U postgres   (case sensitive)

	\l                  shows list of databases
	\c [database]       to switch databases
	\dt                 shows list of tables for database

	\q                  to exist postgres terminal


	TO EXECUTE A FILE WITH QUERIES TO CREATE DATABASE AND TABLES

	psql -U postgres -f [filename]

	For ours: 
	psql -U postgres -f schema.sql

*/
