var Backbone = require('backbone');
var _ = require('underscore');
var navItemModel = require('navItemModel');


var navCollection = Backbone.Collection.extend({
  model: navItemModel

});

module.exports = navCollection;