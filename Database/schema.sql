DROP DATABASE IF EXISTS artists;
CREATE DATABASE artists;

\connect artists

CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	username varchar(40),
	role boolean,
	cookies varchar(100)
);

CREATE TABLE IF NOT EXISTS artist (
	id SERIAL PRIMARY KEY,
	username varchar(40),
	city varchar(40),
	image varchar(100),
	uri varchar(100) UNIQUE
);

CREATE TABLE IF NOT EXISTS date (
	id SERIAL PRIMARY KEY,
	day varchar(20)
);

-- CREATE TABLE IF NOT EXISTS artist_availability (
-- 	artist_id INTEGER UNIQUE,
-- 	date_id INTEGER UNIQUE,
-- 	FOREIGN KEY (artist_id) REFERENCES artist (id),
-- 	FOREIGN KEY (date_id) REFERENCES date (id)
-- );

CREATE TABLE IF NOT EXISTS requested_gigs (
	id SERIAL PRIMARY KEY,
	name varchar(40),
	date_id INTEGER,
	artist_id INTEGER,
	FOREIGN KEY (artist_id) REFERENCES artist (id),
	FOREIGN KEY (date_id) REFERENCES date (id)
);

CREATE TABLE IF NOT EXISTS single (
	id SERIAL PRIMARY KEY,
	name varchar(40),
	artist varchar(40)
);
	-- artist_id INTEGER,
	-- artist_id INTEGER,
	-- FOREIGN KEY (artist_id) REFERENCES artist (id)
