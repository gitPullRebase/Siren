const pg = require("pg");
//const dbPassword = require("../config/config.js").dbPassword;

var connection =
`${process.env.DATABASE_URL}` ||
`postgres://postgres:postgres@localhost:5432/artists`;

var knex = require("knex")({
  client: "pg",
  connection: connection
});

let bookshelf = require("bookshelf")(knex);

let User = bookshelf.Model.extend({
  tableName: "users"
});

let Artist = bookshelf.Model.extend({
  tableName: "artist"
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

module.exports.knex = knex;
module.exports.Artist = Artist;
module.exports.Date = Date;
module.exports.Artist_Availability = Artist_Availability;
module.exports.Requested_Gigs = Requested_Gigs;
module.exports.Single = Single;
module.exports.User = User;

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
