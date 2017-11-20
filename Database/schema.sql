DROP DATABASE IF EXISTS artists;
CREATE DATABASE artists;

\connect artists

CREATE TABLE IF NOT EXISTS artist (
	id INTEGER PRIMARY KEY,
	username varchar(40),
	city varchar(40),
	country varchar(40),
	url varchar(100)
);

CREATE TABLE IF NOT EXISTS date (
	id INTEGER PRIMARY KEY,
	day varchar(20)
);

CREATE TABLE IF NOT EXISTS artist_availability (
	artist_id INTEGER,
	date_id INTEGER
);

CREATE TABLE IF NOT EXISTS requested_gigs (
	id INTEGER PRIMARY KEY,
	name varchar(40),
	date_id INTEGER,
	artist_id INTEGER
);

CREATE TABLE IF NOT EXISTS single (
	name varchar(40),
	artist_id INTEGER
);
