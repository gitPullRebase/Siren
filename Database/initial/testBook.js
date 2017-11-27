// testing purpose
var table = require('../index.js');
let context = table.knex


//for hardcoding aygerim as user. 
// new table.User({ 
// 	username: 'Aygerim Test',
// 	role: 'f'
// }).save()
// .then(function() {
//     context.destroy();
//   })
 
 table.User
  .forge()
  .query()
  .select('username')
  .then(function(model) {
    console.log('users: ', model)
  })
  .then(function() {
  	context.destroy();
  });