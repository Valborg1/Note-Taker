var express = require("express");


// EXPRESS CONFIGURATION
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// ROUTER

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);


// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });