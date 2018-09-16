var Article = require("../models/Article");

module.exports = {
  // finds all articles in the db
  find: function(req, res) {
    console.log("fetching saved articles");
    Article.find().then(function(data) {
      res.json(data);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // adds new articles to the db
  insert: function(req, res) {
    console.log("adding saved articles");
    console.log("req.body: ", req.body);
    Article.create(req.body).then(function(data) {
      res.json(doc);
      console.log("data: ", data);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // deletes articles from the db
  delete: function(req, res) {
    console.log("removing saved article");
    Article.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
      console.log("data: ", data);
    }).catch(function(err) {
      res.json(err);
    });
  }
};