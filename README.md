# Project Name

> Siren

## Usage

> An online platform for booking local artists and DJ's for your events.

## Team

* David
* Aygerim
* Vu
* Ed

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
   1. [Installing Dependencies](#installing-dependencies)
   1. [Tasks](#tasks)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Requirements

* Node 6.4.x
* Redis 2.6.x
* Postgresql 9.1.x
* etc
* etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g bower
npm install
bower install
```

### Setting up the Database

Install postgres on your computer via homebrew or through any of the downloads from the postgres website
https://www.postgresql.org/download/

To access postgres locally from your terminal, run:
```sh
psql -U postgres
```
The above assumes that your username is postgres when connecting to postgres via psql.
Your computer's password to connect to the psql might vary, so make sure to check knexfile.js in the root directory
and database/index.js file and make sure the username, password, and port are applicable to your local machine

Once you're connected, run:
```sh
DROP DATABASE artists;
CREATE DATABASE artists;
```

Then in a separate terminal in the root directory, run:
```sh
npm run dbSetup
```
This will run the knex migrations and seeds folder to populate the tables in the database

After completing these steps, your database and tables will be correctly populated with artists from SF, NY, and LA

Whenever you make a change to your database (adding tables, changing columns), you will have to re-do all
the above steps, starting from DROP DATABASE artists;

### Roadmap

View the project roadmap [here](LINK_TO_DOC)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
