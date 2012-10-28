Template.configureLoginServiceDialogForScvrush.siteUrl = function () {
  return Meteor.absoluteUrl();
};

Template.configureLoginServiceDialogForScvrush.fields = function () {
  return [
    {property: 'clientId', label: 'Client ID'},
    {property: 'secret', label: 'Client Secret'}
  ];
};