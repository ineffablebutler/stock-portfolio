var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
Backbone.$ = $;
var HeaderView = Backbone.View.extend({
  el: "#header",
  initialize: function () {
    this.template = require('../../templates/header.template.html');
    this.render();
  },
  render: function () {
    this.$el.html(_.template(this.template({
      name: 'bbebbe'
    })));
    
  }
});
module.exports = HeaderView;
