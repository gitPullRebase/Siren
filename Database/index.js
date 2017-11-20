const pg = require('pg');

var connection = 'postgres://postgres:rebase@localhost:5432/artists';

var client = new pg.Client(connection);

client.connect();


// Example query: 
// let query = client.query('INSERT into artist (number) VALUES (6)', function() {
//     client.end();
// });


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