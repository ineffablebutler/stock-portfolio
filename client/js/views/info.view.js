// Backbone view for stock information
var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
// NOT NEEDED FOR DEMO
// var PortfolioModel = require();
// var StockView = require();

Backbone.$ = $;

var InfoView = Backbone.View.extend({

  el: '#info-summary',

  template: require('../../templates/info.template.html'),

  render: function () {
    this.$el.html(_.template(this.template()));
    return this.$el;
  }

});

module.exports = InfoView;
