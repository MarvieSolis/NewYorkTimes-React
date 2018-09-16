const express     = require("express");
const path        = require("path");
const bodyParser  = require("body-parser");
const mongoose    = require("mongoose");
const bluebird    = require("bluebird");



const PORT = process.env.PORT || 3001;
mongoose.Promise = bluebird;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static(__dirname + "/client/public"));
}



// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next();
});



// Routing
var articlesController = require("./server/controllers/article.ctrl");
var router = new express.Router();
// Define any API routes first
// Get saved articles
router.get("/api/articles", articlesController.find);
// Save articles
router.post("/api/articles", articlesController.insert);
// delete saved articles
router.delete("/api/articles/:id", articlesController.delete);
// Send every other request to the React app
router.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



app.use(router);



// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



// Connect mongoose to our database
const db = process.env.MONGODB_URI || "mongodb://localhost/nytreact";
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});



// Start the server
app.listen(PORT, function() {
  console.log(`Server now on port ${PORT}!`);
});


