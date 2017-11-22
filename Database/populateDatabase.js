// File only needed if want to create tables in database through knex migrate. 
// Otherwise, running schema.sql is fine


/* TO SET UP KNEX MIGRATE, TYPE IN TERMINAL: 

    knex migrate:make [insertName]

    Then copy and paste the contents below into the file that is created in Database/migrations
    AFTER ABOVE STEP DONE, TYPE AND RUN IN TERMINAL:

    knex migrate:latest
*/

exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('artist', function(table) {
  	table.increments('id').primary();
  	table.string('username');
  	table.string('city');
  	table.string('country');
  	table.string('url');
  })
  .createTable('date', function(table) {
  	table.increments('id').primary();
  	table.string('day');
  })
  .createTable('artist_availability', function(table) {
  	table.integer('artist_id').unsigned().references('id').inTable('artist');
  	table.integer('date_id').unsigned().references('id').inTable('date');
  })
  .createTable('requested_gigs', function(table) {
  	table.increments('id').primary();
  	table.string('name');
  	table.integer('artist_id').unsigned().references('id').inTable('artist');
  	table.integer('date_id').unsigned().references('id').inTable('date');
  })
  .createTable('single', function(table) {
  	table.increments('name');
  	table.integer('artist_id').unsigned().references('id').inTable('artist');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('artist')
    .dropTable('date')
    .dropTable('artist_availability')
    .dropTable('requested_gigs')
    .dropTable('single');
};