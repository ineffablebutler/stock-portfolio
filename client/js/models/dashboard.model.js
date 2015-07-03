var Backbone = require('backbone');
var _ = require('underscore');


var dashboardModel = Backbone.Model.extend({
  defaults: {
    title: "Dashboard"
  }
});

module.exports = dashboardModel;