var Backbone = require('backbone');
var _ = require('underscore');


var DashboardModel = Backbone.Model.extend({
  defaults: {
    title: "Dashboard"
  }
});

module.exports = DashboardModel;