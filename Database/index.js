const pg = require("pg");

// SF ARTISTS
const sampleArtistsSF = require("./artistData/SF_artist_data.js");
const SFArtistTopTracks = require("./artistData/SF_artist_top_tracks.json");

// LA ARTISTS
const sampleArtistsLA = require("./artistData/LA_artist_data.js");
const LAArtistTopTracks = require("./artistData/LA_artist_top_tracks.json");

//NY ARTISTS
const sampleArtistsNY = require("./artistData/NY_artist_data.js");
const NYArtistTopTracks = require("./artistData/NY_artist_top_tracks.json");

var connection =
  `${process.env.DATABASE_URL}/artists` ||
  "postgres://postgres:postgres@localhost:5432/artists";

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

// >>Populates artist table for SF<<
for (let artist = 0; artist < sampleArtistsSF.length; artist++) {
	new Artist({
		username: sampleArtistsSF[artist].name,
		city: 'San Francisco',
		image: sampleArtistsSF[artist].images[0].url,
		uri: sampleArtistsSF[artist].uri
	}).save()
	.catch((err) => {});
}

// >>Populates artist table for LA<<
for (let artist = 0; artist < sampleArtistsLA.length; artist++) {
	new Artist({
		username: sampleArtistsLA[artist].name,
		city: 'Los Angeles',
		image: sampleArtistsLA[artist].images[0].url,
		uri: sampleArtistsLA[artist].uri
	}).save()
	.catch((err) => {});
}

// >>Populates artist table for NY<<
for (let artist = 0; artist < sampleArtistsNY.length; artist++) {
	new Artist({
		username: sampleArtistsNY[artist].name,
		city: 'New York',
		image: sampleArtistsNY[artist].images[0].url,
		uri: sampleArtistsNY[artist].uri
	}).save()
	.catch((err) => {});
}

// >>Populates date table with all entries<<
for (let month = 1; month <= 12; month++) {
	for (let day = 1; day <= 31; day++) {
		let lessDays = (month === 2 && day === 28) || (month === 4 && day === 30) ||
		               (month === 6 && day === 30) || (month === 9 && day === 30) ||
		               (month === 11 && day === 30);
		new Date({
			day: month + '/' + day
		}).save()
		.catch((err) => {

		});
		if (lessDays) {
			day = 32;
		}
	}
}

// Populate small date table
// for (let month = 1; month < 5; month++) {
// 	for (let day = 1; day <= 5; day++) {
// 		new Date({
// 			day: month + '/' + day
// 		}).save()
// 		.catch((err) => {

// 		});
// 	}
// }

for (var artist in SFArtistTopTracks) {
	let id = SFArtistTopTracks[artist][0].id;
	new Single({
		name: SFArtistTopTracks[artist][0].id,
		artist: artist
	}).save()
	.catch((err) => {

	});
}

for (var artist in LAArtistTopTracks) {
	let id = LAArtistTopTracks[artist][0].id;
	new Single({
		name: LAArtistTopTracks[artist][0].id,
		artist: artist
	}).save()
	.catch((err) => {

	});
}

for (var artist in NYArtistTopTracks) {
	let id = NYArtistTopTracks[artist][0].id;
	new Single({
		name: NYArtistTopTracks[artist][0].id,
		artist: artist
	}).save()
	.catch((err) => {

	});
}
// POPULATES artist_availability table
// client.query('INSERT INTO artist_availability (artist_id, date_id) SELECT artist.id, date.id FROM artist, date', function() {
// 	client.end();
// });


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
