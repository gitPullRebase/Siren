// File needed if want to create tables in database through knex migrate.

/* TO SET UP KNEX MIGRATE, TYPE IN TERMINAL: 

    knex migrate:make [name]

    Then copy and paste the contents below into the file that is created in Database/migrations
    AFTER ABOVE STEP DONE, TYPE AND RUN IN TERMINAL:

    knex migrate:latest
*/

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("users", function(table) {
      table.increments("id").primary();
      table.string("facebookID");
      table.string("username");
      table.string("token");
      table.boolean("role");
    }),
    knex.schema.createTable("artist", function(table) {
      table.increments("id").primary();
      table.string("username");
      table.string("city");
      table.string("image");
      table.string("uri").unique();
    }),
    knex.schema.createTable("date", function(table) {
      table.increments("id").primary();
      table.string("day");
    }),
    knex.schema.createTable("requested_gigs", function(table) {
      table.increments("id").primary();
      table.string("message");
      table
        .integer("artist_id")
        .unsigned()
        .references("id")
        .inTable("artist");
      table
        .integer("date_id")
        .unsigned()
        .references("id")
        .inTable("date");
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users");
      table.string("message");
    }),
    knex.schema.createTable("single", function(table) {
      table.increments("id").primary();
      table.string("single_id");
      table.string("artist");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return (
    knex.schema
      .dropTable("users")
      .dropTable("artist")
      .dropTable("date")
      // .dropTable('artist_availability')
      .dropTable("requested_gigs")
      .dropTable("single")
  );
};
