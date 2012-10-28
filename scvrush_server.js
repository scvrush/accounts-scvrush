if (typeof Scvrush === "undefined") Scvrush = {};

Scvrush.authenticate = function(login, password, cb) {
  return true;
};

Meteor.methods({
  authenticate: function(login, password) {
    var result = Scvrush.authenticate(login, password);
    if (result) {
      var token = Meteor.uuid();
      return token;
    } else {
      return false;
    }
  }
});
