var Backbone = require('backbone');
var _ = require('underscore');
var UserModel = Backbone.Model.extend({
  initialize: function () {

  },
  defaults: {
    id: 0,
    username: '',
    name: '',
    email: ''
  },
  url: function () {
    return '/api/user';
  }
});
module.exports = UserModel;
