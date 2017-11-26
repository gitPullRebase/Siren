var environment = process.env.NODE_ENV || 'development';
var config = {
	development: {
		client: 'pg',
		connection: 'postgres://postgres:postgres@localhost:5432/artists',
		migrations: {
			directory: __dirname + '/Database/migrations'
		},
		seeds: {
			directory: __dirname + '/Database/seeds'
		}
	},
	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL,
		migrations: {
			directory: __dirname + '/Database/migrations'
		},
		seeds: {
			directory: __dirname + '/Database/seeds'
		}
	}
};

module.exports = config;
