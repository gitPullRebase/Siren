var environment = process.env.NODE_ENV || "development";

/** For accessing your local database and to test:
 * 1. create a config folder on the root of your directory
 * 2. create a config.js file in the folder
 * 3. add var dbPassword and set it to your postgress role's password
 * 4. uncomment the following line
 * 5. uncomment lines 2 and 6 in Database/index.js
 * 6. uncomment "development" inside config object below
 */

//const dbPassword = require("./config/config.js").dbPassword;

var config = {
  // development: {
  //   client: "pg",
  //   connection: `postgres://postgres:${dbPassword}@localhost:5432/artists`,
  //   migrations: {
  //     directory: __dirname + "/Database/migrations"
  //   },
  //   seeds: {
  //     directory: __dirname + "/Database/seeds"
  //   }
  // },
  production: {
    client: "pg",
    connection: `${process.env.DATABASE_URL}`,
    migrations: {
      directory: __dirname + "/Database/migrations"
    },
    seeds: {
      directory: __dirname + "/Database/seeds"
    }
  }
};

module.exports = config;
