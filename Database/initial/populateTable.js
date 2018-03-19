// HOW TO MAKE SEED:

// knex seed:make [name]

// TO RUN SEED FILE:

// knex seed:run

// SF ARTISTS
const sampleArtistsSF = require("../artistData/SF_artist_data.js");
const SFArtistTopTracks = require("../artistData/SF_artist_top_tracks.json");

// LA ARTISTS
const sampleArtistsLA = require("../artistData/LA_artist_data.js");
const LAArtistTopTracks = require("../artistData/LA_artist_top_tracks.json");

//NY ARTISTS
const sampleArtistsNY = require("../artistData/NY_artist_data.js");
const NYArtistTopTracks = require("../artistData/NY_artist_top_tracks.json");


/**
 * seed This function is created with creating a seed with knex and is used to add starterdata into tables
 * @param {Promise} knex SQL builder
 * @param {Promise} Promise This is a promise that will ensure that the tables will be populated
 * @return {Promise} This will populate the tables with initial data from artists
 */
exports.seed = function(knex, Promise) {
  return knex("artist")
    .del()
    .then(() => {
      return knex("date").del();
    })
    .then(() => {
      return knex("single").del();
    })
    .then(() => {
      return knex("users").del();
    })
    .then(() => {
      let artistPromises = [];

      // Populates artist table
      for (let artist = 0; artist < sampleArtistsSF.length; artist++) {
        artistPromises.push(createSFArtist(knex, sampleArtistsSF[artist]));
      }
      for (let artist = 0; artist < sampleArtistsLA.length; artist++) {
        artistPromises.push(createLAArtist(knex, sampleArtistsLA[artist]));
      }
      for (let artist = 0; artist < sampleArtistsNY.length; artist++) {
        artistPromises.push(createNYArtist(knex, sampleArtistsNY[artist]));
      }

      // Populates date table
      for (let month = 1; month <= 12; month++) {
        for (let day = 1; day <= 31; day++) {
          let lessDays =
            (month === 2 && day === 28) ||
            (month === 4 && day === 30) ||
            (month === 6 && day === 30) ||
            (month === 9 && day === 30) ||
            (month === 11 && day === 30);

          let currentDay = month + "/" + day;
          artistPromises.push(createDate(knex, currentDay));
          if (lessDays) {
            day = 32;
          }
        }
      }

      // Singles from SF, LA, NY
      for (var artist in SFArtistTopTracks) {
        let artistAlbum = SFArtistTopTracks[artist];
        for (var i = 0; i < artistAlbum.length; i++) {
          let id = artistAlbum[i].id;
          artistPromises.push(createSingle(knex, artist, id));
        }
      }

      for (var artist in LAArtistTopTracks) {
        let artistAlbum = LAArtistTopTracks[artist];
        for (var i = 0; i < artistAlbum.length; i++) {
          let id = artistAlbum[i].id;
          artistPromises.push(createSingle(knex, artist, id));
        }
      }

      for (var artist in NYArtistTopTracks) {
        let artistAlbum = NYArtistTopTracks[artist];
        for (var i = 0; i < artistAlbum.length; i++) {
          let id = artistAlbum[i].id;
          artistPromises.push(createSingle(knex, artist, id));
        }
      }

      // Populate users table with initial data from artists
      let allArtists = sampleArtistsSF
        .concat(sampleArtistsLA)
        .concat(sampleArtistsNY);
      for (var artist = 0; artist < allArtists.length; artist++) {
        artistPromises.push(createUser(knex, allArtists[artist]));
      }

      return Promise.all(artistPromises);
    });
};

/**
 * @param {Promise} knex SQL builder
 * @param {Object} artist This object contains the artist's name, city, image, and uri
 * @return {Promise} Inserts an entry into the artist table for SF artists
 */
const createSFArtist = (knex, artist) => {
  return knex("artist").insert({
    username: artist.name,
    city: "San Francisco",
    image: artist.images[0].url,
    uri: artist.uri
  });
};

/**
 * @param {Promise} knex SQL builder
 * @param {Object} artist This object contains the artist's name, city, image, and uri
 * @return {Promise} Inserts an entry into the artist table for LA artists
 */
const createLAArtist = (knex, artist) => {
  return knex("artist").insert({
    username: artist.name,
    city: "Los Angeles",
    image: artist.images[0].url,
    uri: artist.uri
  });
};

/**
 * @param {Promise} knex SQL builder
 * @param {Object} artist This object contains the artist's name, city, image, and uri
 * @return {Promise} Inserts an entry into the artist table for NY artists
 */
const createNYArtist = (knex, artist) => {
  return knex("artist").insert({
    username: artist.name,
    city: "New York",
    image: artist.images[0].url,
    uri: artist.uri
  });
};

/**
 * @param {Promise} knex SQL builder
 * @param {String} day This will be in the format of 'D/M' for all 365 days of the year
 * @return {Promise} Inserts a date entry into the date table
 */
const createDate = (knex, day) => {
  return knex("date").insert({
    day: day
  });
};

/**
 * @param {Promise} knex SQL builder
 * @param {String} artist
 * @param {Number} id 
 * @return {Promise} Inserts an entry containing an artist's single and name into the single table
 */
const createSingle = (knex, artist, id) => {
  return knex("single").insert({
    single_id: id,
    artist: artist
  });
};

/**
 * @param {Promise} knex SQL builder
 * @param {Object} artist 
 * @return {Promise} Inserts a user into the users table
 */
const createUser = (knex, artist) => {
  return knex("users").insert({
    facebookID: null,
    username: artist.name,
    token: null,
    role: true
  });
};
