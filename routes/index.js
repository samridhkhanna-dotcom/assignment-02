var express = require('express');
var router = express.Router();

// Home page
router.get('/', function(req, res) {
  res.render('index');
});

// About page
router.get('/about', function(req, res) {
  res.render('about');
});

// Projects page
router.get('/projects', function(req, res) {
  res.render('projects');
});

// Contact page
router.get('/contact', function(req, res) {
  res.render('contact');
});

module.exports = router;
