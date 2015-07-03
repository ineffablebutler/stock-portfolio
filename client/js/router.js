var Backbone = require('backbone');
var ProfileModel = require('./models/profile.model');
var NavView = require('./views/nav.view');
var TrendsView = require('./views/trends.view');
var ProfileView = require('./views/profile.view');
var PortfoliosView = require('./views/portfolios.view');
var HeaderView = require('./views/header.view');
var SessionModel = require('./models/session.model');
var sessionModel = new SessionModel({});
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
    // Check the auth status upon initialization,
    // before rendering anything or matching routes
    sessionModel.checkAuth({
      // Start the backbone routing once we have captured a user's auth status
      complete: function () {
        // HTML5 pushState for URLs without hashbangs
        var hasPushstate = !!(window.history && history.pushState);
        if (hasPushstate) {
          Backbone.history.start({
            pushState: true,
            root: '/'
          });
        } else {
          Backbone.history.start();
        }
      }
    });
  },
  show: function (view, options) {
    if (!this.headerView) {
      this.headerView = new HeaderView({});
    }
    // Close and unbind any existing page view
    if (this.currentView && _.isFunction(this.currentView.close)) {
      this.currentView.close();
    }
    // Establish the requested view into scope
    this.currentView = view;
    // Need to be authenticated before rendering view.
    // For cases like a user's settings page where we need to double check against the server.
    if (typeof options !== 'undefined' && options.requiresAuth) {
      var self = this;
      sessionModel.checkAuth({
        success: function (res) {
          // If auth successful, render inside the page wrapper
          $('#content').html(self.currentView.render().$el);
        },
        error: function (res) {
          self.navigate("/", {
            trigger: true,
            replace: true
          });
        }
      });
    } else {
      // Render inside the page wrapper
      this.currentView.render();
      //this.currentView.delegateEvents(this.currentView.events);        
      // Re-delegate events (unbound when closed)
    }
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
      this.show(profileView);
      navView = new NavView();
      navView.render('dashboard');
    }
  }
});
module.exports = Router;
