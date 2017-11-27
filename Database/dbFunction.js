const table = require("./index.js");
let context = table.knex;

let saveUser = (name, token, facebookId, boolean) => {
  this.checkUsersTable(facebookId).then(userObj => {
    if (userObj === null || userObj.length < 1) {
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
    }
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

let getChatrooms = userId => {
  return table.Requested_Gigs.forge()
    .where("user_id", "=", userId)
    .query()
    .select();
};

let getCurrentUser = facebookId => {
  return table.User.forge()
    .where("facebookID", "=", facebookId)
    .query()
    .select();
};

module.exports.saveUser = saveUser;
module.exports.checkArtistTable = checkArtistTable;
module.exports.checkUsersTable = checkUsersTable;
module.exports.getArtists = getArtists;
module.exports.getTracks = getTracks;
module.exports.getChatrooms = getChatrooms;
module.exports.getCurrentUser = getCurrentUser;
