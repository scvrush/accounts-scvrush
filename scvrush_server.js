if (typeof Scvrush === "undefined") Scvrush = {};

Scvrush.authenticate = function(login, password, cb) {
  var query = "username=" + login + "&password=" + password;

  var response = Meteor.http.get("http://scvrush.com/api/auth.json", { query: query });
  return response;
};

(function() {

  var _authenticated = function(response) {
    if (response.statusCode === 200) {
      return _authenticationSuccessful(response.data);
    } else {
      return _authenticationFailed();
    }
  };

  var _authenticationSuccessful = function(data) {
    console.log("API key", data.key);
    return data.key;
  };

  var _authenticationFailed = function() {
    console.log("Authentication failed");
    return null;
  };

  Meteor.methods({
    authenticate: function(login, password) {
      var response = Scvrush.authenticate(login, password);

      return _authenticated(response);
    }
  });

})()

