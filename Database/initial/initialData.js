var table = require('./index.js');

// SF ARTISTS
const sampleArtistsSF = require("./artistData/SF_artist_data.js");
const SFArtistTopTracks = require("./artistData/SF_artist_top_tracks.json");

// LA ARTISTS
const sampleArtistsLA = require("./artistData/LA_artist_data.js");
const LAArtistTopTracks = require("./artistData/LA_artist_top_tracks.json");

//NY ARTISTS
const sampleArtistsNY = require("./artistData/NY_artist_data.js");
const NYArtistTopTracks = require("./artistData/NY_artist_top_tracks.json");



// >>Populates artist table for SF<<
for (let artist = 0; artist < sampleArtistsSF.length; artist++) {
	new table.Artist({
		username: sampleArtistsSF[artist].name,
		city: 'San Francisco',
		image: sampleArtistsSF[artist].images[0].url,
		uri: sampleArtistsSF[artist].uri
	}).save()
	.catch((err) => {});
}

// >>Populates artist table for LA<<
for (let artist = 0; artist < sampleArtistsLA.length; artist++) {
	new table.Artist({
		username: sampleArtistsLA[artist].name,
		city: 'Los Angeles',
		image: sampleArtistsLA[artist].images[0].url,
		uri: sampleArtistsLA[artist].uri
	}).save()
	.catch((err) => {});
}

// >>Populates artist table for NY<<
for (let artist = 0; artist < sampleArtistsNY.length; artist++) {
	new table.Artist({
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
		new table.Date({
			day: month + '/' + day
		}).save()
		.catch((err) => {

		});
		if (lessDays) {
			day = 32;
		}
	}
}

for (var artist in SFArtistTopTracks) {
	let artistAlbum = SFArtistTopTracks[artist];
	for (var i = 0; i < artistAlbum.length; i++) {
		let id = artistAlbum[i].id;
		new table.Single({
			single_id: id,
			artist: artist
		}).save()
		.catch((err) => {

		});
	}
}

for (var artist in LAArtistTopTracks) {
	let artistAlbum = LAArtistTopTracks[artist];
	for (var i = 0; i < artistAlbum.length; i++) {
		let id = artistAlbum[i].id;
		new table.Single({
			single_id: id,
			artist: artist
		}).save()
		.catch((err) => {

		});
	}
}

for (var artist in NYArtistTopTracks) {
	let artistAlbum = NYArtistTopTracks[artist];
	for (var i = 0; i < artistAlbum.length; i++) {
		let id = artistAlbum[i].id;
		new table.Single({
			single_id: id,
			artist: artist
		}).save()
		.catch((err) => {

		});
	}
}

