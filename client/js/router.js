var Backbone = require('backbone');
var DashboardView = require('./views/dashboard.view');
var NavView = require('./views/nav.view');
var TrendsView = require('./views/trends.view');
var ProfileView = require('./views/profile.view');
var PortfoliosView = require('./views/portfolios.view');
var Router = Backbone.Router.extend({
  routes: {
    'following/:id': 'following',
    'followers/:id': 'follower',
    'portfolios/:id': 'portfolios',
    'company/:id': 'company',
    'profile': 'profile',
    'trends': 'trends',
    '*other': 'dashboard'
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
  profile: function () {
    console.log("profile");
    var profileView = new ProfileView();
    var navView = new NavView();
    profileView.render();
    navView.render('profile');
  }
});
module.exports = Router;
