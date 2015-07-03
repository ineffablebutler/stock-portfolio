var $ = jQuery = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
Backbone.$ = $;
var semantic = require('../../lib/semantic.js');
var navView = Backbone.View.extend({
  el: "#nav",
  events: {
    "keyup .search" : "handleAutoComplete"
  },
  initialize: function () {
    // var search = this.model;
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
  },
  handleAutoComplete: function(){
    var query = $(".prompt").val();
    if(query.length>0){
      console.log(query); 
      $.ajax({
          type: 'GET',
          url:'/auto',
          data: {data: query},
          success: function (response) {
            parsed = (JSON.parse(response.slice(39,response.length-1 ))).ResultSet.Result;
            var suggestions = [];
            //format array
            for(var i = 0; i<parsed.length; i++){
              suggestions.push({title:parsed[i].name + " (" + parsed[i].symbol + ")", symbol: parsed[i].symbol});
            };
            $('.ui.search').search({
                source : suggestions,
                searchFields: ['title', 'symbol'],
                searchFullText: true,
                cache: true,
              });
            // $('.ui.search').search({searchFields:['name','symbol'], source: suggestions });
          },
          error: function() {
            console.log("nopee!");
          }
        });
    }
  }
});
module.exports = navView;
