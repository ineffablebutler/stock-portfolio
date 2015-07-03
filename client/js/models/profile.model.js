var Backbone = require('backbone');
var _ = require('underscore');


var profileModel = Backbone.Model.extend({
  defaults: {
    title: "Profile"
  }
});

module.exports = profileModel;