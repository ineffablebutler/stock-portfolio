var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
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
  }
});
module.exports = TrendsView;
