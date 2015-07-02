var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
Backbone.$ = $;
var navView = Backbone.View.extend({
  el: "#nav",
  initialize: function () {
    this.template = require('../../templates/nav.template.html');
    this.render();
  },
  render: function (cat) {
    console.log("rendering nav", cat);
    this.$el.html(_.template(this.template({
      name: 'bbebbe'
    })));
    $('#nav .item').removeClass('active');
    $('#nav #' + cat).addClass('active');
  }
});
module.exports = navView;
