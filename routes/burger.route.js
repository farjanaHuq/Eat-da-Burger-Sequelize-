var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var model = require("../models/burger.model");


//=======================================Routes==========================================
// ------------------- html route(s) --------------------
router.get("/", function (req, res) {
    model.Burgers.findAll({})
    .then(function(dbData){
      res.render("index", {Burgers:dbData})
    }).catch(function (err) {
      console.log(err);
      throw err;
    });
});

// ------------------- api route(s) --------------------
router.get("/api/burgers", function (req, res) {
  model.Burgers.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(function(dbData){
    res.json({Burgers:dbData});
  }).catch(function (err) {
    console.log(err);
    throw err;
  });
  
});

router.post("/api/burgers", function (req, res) {
  model.Burgers.create({
    burgerName: req.body.burgerName,
    devoured: req.body.devoured
  }).then(function(dbData){
     res.json({Burgers: dbData})
  }).catch(function(err){
    console.log(err);
    throw err;
  });
 
});

router.put("/api/burgers/:id", function (req, res) {
    model.Burgers.update(req.body,{
        where: {
          id: req.body.id,
          devoured: req.body.devoured
        }
    })
    .then(function(dbData){
        res.json({Burgers: dbData})
    })
    .catch(function(err){
      console.log(err);
      throw err;
    });
});

router.delete("/api/burgers/:id", function (req, res) {
  model.Burgers.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(dbData){
    res.json({Burgers: dbData});
  })
  .catch(function(err){
    console.log(err);
      throw err;
  });
});

module.exports = router;