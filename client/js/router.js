var Backbone = require('backbone');
var ProfileModel = require('./models/profile.model');
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
    var profileModel, profileView, navView;
    if (id) {
      profileModel = new ProfileModel({
        id: id
      });
      profileView = new ProfileView({
        model: profileModel
      });
      navView = new NavView();
      profileView.render();
      navView.render();
    } else {
      console.log("profile");
      profileModel = new ProfileModel();
      profileView = new ProfileView({
        model: profileModel
      });
      navView = new NavView();
      profileView.render();
      navView.render('dashboard');
    }
  }
});
module.exports = Router;
