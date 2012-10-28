Meteor.methods({
  authenticate: function(login, password) {
    var token = Meteor.uuid();
    return token;
  }
});
