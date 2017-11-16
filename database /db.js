const pg = require('pg');

var connection = 'postgres://postgres:rebase@localhost:5432/artists';

var client = new pg.Client(connection);

client.connect();

let query = client.query('INSERT into artist (number) VALUES (6)', function() {
    client.end();
});