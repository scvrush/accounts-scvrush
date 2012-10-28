(function () {
  var _authenticated = function(err, res) {
    console.log("New UUID is " + res);
  };

  Template.scvrushLogin.events = {
    "submit form": function(event) {
      event.preventDefault();
      var login    = $(event.target).find("[name=login]").val(),
          password = $(event.target).find("[name=password]").val();

      Meteor.call("authenticate", login, password, _authenticated)
    }
  };
})();


