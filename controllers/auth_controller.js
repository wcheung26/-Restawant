const db = require("../models");

module.exports = function(app, passport) {

  app.post('/admin/login', passport.authenticate('admin-login', {
    successRedirect : '/admin/dashboard',
    failureRedirect : '/admin/login'
  }));

  app.post('/admin/signup', passport.authenticate('admin-signup', {
    successRedirect : '/admin/dashboard',
    failureRedirect : '/admin/signup'
  }));

  app.post('/influencer/login', passport.authenticate('influencer-login', {
    successRedirect : '/influencer/dashboard',
    failureRedirect : '/influencer/login'
  }));

  app.post('/influencer/signup', passport.authenticate('influencer-signup', {
    successRedirect : '/influencer/dashboard',
    failureRedirect : '/influencer/signup'
  }));

  app.post('/restaurant/login', passport.authenticate('restaurant-login', {
    successRedirect : '/restaurant/dashboard',
    failureRedirect : '/restaurant/login'
  }));

  app.post('/restaurant/signup', passport.authenticate('restaurant-signup'), function(req, res) {
    if (req.user) {
      res.json({ success: true });
    }
  });

  app.get('/auth/restaurant', restaurantLoggedIn, function(req, res) {
    res.json(req.user);
  });

  app.get('/auth/influencer', influencerLoggedIn, function(req, res) {
    res.json(req.user);
  });

  app.get('/auth/admin', adminLoggedIn, function(req, res) {
    res.json(req.user);
  });
  
  app.get('/auth/user', isLoggedIn, function(req, res) {
    res.json(req.user);
  });

  app.get('/auth/logout', isLoggedIn, function(req, res) {
    res.clearCookie('connect.sid');
    res.redirect('/');
  });
}

// route middleware to make sure a user is logged in
function restaurantLoggedIn(req, res, next) {
  if (req.isAuthenticated() && req.user.isRestaurant === true && req.user.isAdmin === false) {
    return next();
  }

  res.redirect('/');
}

function influencerLoggedIn(req, res, next) {
  if (req.isAuthenticated() && req.user.isRestaurant === false && req.user.isAdmin === false) {
    return next();
  }

  res.redirect('/');
}

function adminLoggedIn(req, res, next) {
  if (req.isAuthenticated() && req.user.isAdmin === true) {
    return next();
  }

  res.redirect('/');
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/');
}