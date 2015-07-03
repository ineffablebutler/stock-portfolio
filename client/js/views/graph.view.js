var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var d3 = require('d3');
var nv = require('../../lib/nvd3.min.js');
Backbone.$ = $;
var GraphView = Backbone.View.extend({
  initialize: function () {
    this.template = require('../../templates/graph.template.html');
  },
  render: function () {
    console.log('this.model: ', this.model.attributes);
    this.$el.html(_.template(this.template({
      name: 'template ooo'
    })));
    this.drawGraph();
  },
  drawGraph: function () {
    var chart = nv.models.cumulativeLineChart().useInteractiveGuideline(true).x(function (d) {
      return d[0];
    }).y(function (d) {
      return d[1] / 100;
    }).color(d3.scale.category10().range()).average(function (d) {
      return d.mean / 100;
    }).duration(300).clipVoronoi(false);

    chart.dispatch.on('renderEnd', function () {
      console.log('render complete: cumulative line with guide line');
    });
    chart.xAxis.tickFormat(function (d) {
      return d3.time.format('%m/%d/%y')(new Date(d));
    });
    chart.yAxis.tickFormat(d3.format(',.1%'));

    d3.select('#chart1 svg').datum(this.model.attributes.datas).call(chart);
    console.log("chart---", d3.select('#chart1 svg'));
    //TODO: Figure out a good way to do this automatically
    nv.utils.windowResize(chart.update);
    chart.dispatch.on('stateChange', function (e) {
      nv.log('New State:', JSON.stringify(e));
    });
    chart.state.dispatch.on('change', function (state) {
      nv.log('state', JSON.stringify(state));
    });
  }
});
module.exports = GraphView;
