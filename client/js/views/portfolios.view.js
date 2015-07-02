var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
Backbone.$ = $;
var PortfoliosView = Backbone.View.extend({
  el: "#main",
  initialize: function () {
    this.template = require('../../templates/portfolios.template.html');
    this.render();
  },
  render: function () {
    this.$el.html(_.template(this.template({
      name: 'bbebbe'
    })));
  }
});
module.exports = PortfoliosView;
