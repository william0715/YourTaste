var express = require('express');
var app = express();
var userRoutes = express.Router();

// Require Item model in our routes module
var Coin = require('../models/User');

// Login
userRoutes.route('/login').post(function (req, res) {
    console.log('login');

    var user = new User(req.body);

    User.findById(user.id, function (err, userFound) {
        res.status(200).send("success to login!");
    });
});

// add
userRoutes.route('/add').post(function (req, res) {
    console.log('add');
    var user = new User(req.body);
    user.save()
    .then(item => {
        res.status(200).json({'coin': 'Coin added successfully'});
    })
    .catch(err => {
        res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
userRoutes.route('/').get(function (req, res) {
   User.find(function (err, users){
    if(err){
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});

// Defined edit route
userRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Coin.findById(id, function (err, coin){
      res.json(coin);
  });
});

//  Defined update route
userRoutes.route('/update/:id').post(function (req, res) {
   Coin.findById(req.params.id, function(err, coin) {
    if (!coin)
      return next(new Error('Could not load Document'));
    else {
      coin.name = req.body.name;
      coin.price = req.body.price;

      coin.save().then(coin => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
userRoutes.route('/delete/:id').get(function (req, res) {
   Coin.findByIdAndRemove({_id: req.params.id}, function(err, coin){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = userRoutes;