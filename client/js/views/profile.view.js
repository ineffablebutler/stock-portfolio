var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var GraphView = require('./graph.view');
var GraphTrendsModel = require('../models/graph.trends.model');
Backbone.$ = $;
var ProfileView = Backbone.View.extend({
  el: "#main",
  initialize: function () {
    this.template = require('../../templates/profile.template.html');
    this.render();
  },
  render: function () {
    this.$el.html(_.template(this.template({
      title: this.model.get('title')
    })));
    var graphView = new GraphView({model: new GraphTrendsModel() });
    this.$("#graph").html(graphView.el);
    graphView.render();
  }
});
module.exports = ProfileView;
