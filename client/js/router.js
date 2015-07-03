var Backbone = require('backbone');
var DashboardModel = require('./models/dashboard.model');
var ProfileModel = require('./models/profile.model');
var DashboardView = require('./views/dashboard.view');
var NavView = require('./views/nav.view');
var TrendsView = require('./views/trends.view');
var ProfileView = require('./views/profile.view');
var PortfoliosView = require('./views/portfolios.view');
var Router = Backbone.Router.extend({
  routes: {
    'following/:id': 'profile',
    'followers/:id': 'profile',
    'portfolios/:id': 'portfolios',
    'company/:id': 'company',
    'trends': 'trends',
    '*other': 'profile'
  },
  dashboard: function () {
    console.log("router default");
    var dashboardView = new DashboardView();
    // var navCollection = new NavCollection([{name: "Dashboard", link: "dashboard"},{name: "Portfolio", link: "portfolio"}]);
    var navView = new NavView();
    dashboardView.render();
    navView.render('dashboard');
  },
  initialize: function () {
    Backbone.history.start();
  },
  portfolios: function (id) {
    console.log("portfolios");
    var portfoliosView = new PortfoliosView();
    var navView = new NavView();
    portfoliosView.render();
    navView.render('portfolios');
  },
  trends: function () {
    console.log("trends");
    var trendsView = new TrendsView();
    var navView = new NavView();
    trendsView.render('trends');
    navView.render('trends');
  },
  profile: function (id) {
    if(id){
      var profileModel = new ProfileModel({id: id});
      var profileView = new ProfileView({model: profileModel});
      var navView = new NavView();
      profileView.render();
      navView.render();
    } else {
      console.log("profile");
      var dashboardModel = new DashboardModel();
      var profileView = new ProfileView({model: dashboardModel});
      var navView = new NavView();
      profileView.render();
      navView.render('dashboard');
    }
  }
});
module.exports = Router;
