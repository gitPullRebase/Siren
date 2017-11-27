const table = require("./index.js");
let context = table.knex;
let saveUser = (name, token, facebookId, boolean) => {
  new table.User({
    facebookID: facebookId,
    username: name,
    token: token,
    role: boolean
  })
    .save()
    .then(() => {
      context.destroy();
    });
};

let getArtists = city => {
  return table.Artist.forge()
    .where("city", "=", city)
    .query()
    .select();
};

let getTracks = artist => {
  return table.Single.forge()
    .where("artist", "=", artist)
    .query()
    .select();
};

let checkArtistTable = name => {
  return table.Artist.forge()
    .where("username", "=", name)
    .query()
    .select();
};

let checkUsersTable = facebookID => {
  return table.User.forge()
    .where("facebookID", "=", facebookID)
    .query()
    .select();
};

module.exports.saveUser = saveUser;
module.exports.checkArtistTable = checkArtistTable;
module.exports.checkUsersTable = checkUsersTable;
module.exports.getArtists = getArtists;
module.exports.getTracks = getTracks;
