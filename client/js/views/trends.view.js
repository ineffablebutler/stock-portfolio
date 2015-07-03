var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var GraphView = require('./graph.view');
var GraphTrendsModel = require('../models/graph.trends.model');
Backbone.$ = $;
var TrendsView = Backbone.View.extend({
  el: "#main",
  initialize: function () {
    this.template = require('../../templates/trends.template.html');
    this.render();
  },
  render: function () {
    this.$el.html(_.template(this.template({
      name: 'bbebbe'
    })));
    // graphView.render()
    var graphView = new GraphView({model: new GraphTrendsModel() });
    this.$("#trends-overview").html(graphView.el);
    graphView.render();
    console.log('graph:', graphView.el);

  }
});
module.exports = TrendsView;
