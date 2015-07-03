var Backbone = require('backbone');
var _ = require('underscore');


var ProfileModel = Backbone.Model.extend({
  defaults: {
    title: "Profile"
  }
});

module.exports = ProfileModel;