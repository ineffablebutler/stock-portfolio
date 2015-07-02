var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
Backbone.$ = $;
var ProfileView = Backbone.View.extend({
  el: "#main",
  initialize: function () {
    this.template = require('../../templates/profile.template.html');
    this.render();
  },
  render: function () {
    this.$el.html(_.template(this.template({
      name: 'bbebbe'
    })));
  }
});
module.exports = ProfileView;
