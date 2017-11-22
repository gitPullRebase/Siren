DROP DATABASE IF EXISTS artists;
CREATE DATABASE artists;

\connect artists

CREATE TABLE IF NOT EXISTS artist (
	id SERIAL PRIMARY KEY,
	username varchar(40),
	city varchar(40),
	country varchar(40),
	url varchar(100)
);

CREATE TABLE IF NOT EXISTS date (
	id SERIAL PRIMARY KEY,
	day varchar(20)
);

CREATE TABLE IF NOT EXISTS artist_availability (
	artist_id INTEGER,
	date_id INTEGER,
	FOREIGN KEY (artist_id) REFERENCES artist (id),
	FOREIGN KEY (date_id) REFERENCES date (id)
);

CREATE TABLE IF NOT EXISTS requested_gigs (
	id SERIAL PRIMARY KEY,
	name varchar(40),
	date_id INTEGER,
	artist_id INTEGER,
	FOREIGN KEY (artist_id) REFERENCES artist (id),
	FOREIGN KEY (date_id) REFERENCES date (id)
);

CREATE TABLE IF NOT EXISTS single (
	name varchar(40),
	artist_id INTEGER,
	FOREIGN KEY (artist_id) REFERENCES artist (id)
);
