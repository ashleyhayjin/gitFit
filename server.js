const express = require("express");
const morgan = require('morgan');
const mongConnect = require("./mongoose.js");
const homeRoutes = require("./controllers/homeRoutes");
const apiRoutes = require("./controllers/api/workoutRoutes");
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(homeRoutes);
app.use(apiRoutes);

mongConnect.once("open", () => {
  app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
})
