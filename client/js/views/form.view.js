var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var InfoView = require('./info.view.js')

Backbone.$ = $;

var FormView = Backbone.View.extend({
  el: '#stock-form',

  initialize: function () {
    this.template = require('../../templates/form.template.html');
    this.infoView = new InfoView();
  },

  events: {
    //Form submission form
    'submit': 'handleSubmit',
  },

  // handleDuplicates() IS NOT NEEDED FOR DEMO
  // handleDuplicates: function (params) {
  //   var stocks = this.collection;
  //   var existingStock = stocks.findStock(params.symbol);
  //   var startDate = new Date(params.from);
  //   if (existingStock) {
  //     if (existingStock.getStartDate() <= startDate) {
  //       // no need to make an addtional API call; just adds shares to the stock
  //       // starting with the new start date
  //       existingStock.addTo(startDate, parseFloat(params.amount));
  //     } else {
  //       // makes API call to get earlier stock history, then updates model
  //       stocks.getNewStockTrajectory(params).then(function (resp) {
  //         existingStock.update(resp, parseFloat(params.amount));
  //       });
  //     }
  //   } else {
  //     /* Create will create a new stock in the collection
  //      and send a request for the pertinent information */
  //     this.collection.create(params);
  //   }
  // },

  handleSubmit: function (e) {
    console.log('form submitted');
    e.preventDefault();
    // //start spinner upon stock creation
    // if (this.$('form')[0].checkValidity()) {
    //   var d = new Date();
    //   var requestStock = {
    //     symbol: this.$('#symbol').val().toUpperCase(),
    //     from: this.$('#date').val(),
    //     amount: this.$('#amount').val(),
    //     to: d.toISOString().slice(0, 10) //Just the YYYY-MM-DD portion
    //   };
    //   this.handleDuplicates(requestStock);
    // } else {
    //   this.$('form')[0].reset();
    // }

    // HARD CODE LOADING IN SUMMARY INFO FOR DEMO
    this.infoView.render();

    this.$('#symbol').val('');
    this.$('#amount').val('');
  },

  render: function () {
    //Render main form
    this.$el.html(_.template(this.template()));
    return this.$el;
  }

});
module.exports = FormView;
