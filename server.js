const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');


const app = express();


app.use(express.static("public"));
app.set('view engine', 'headers/content');

app.listen(3000, function() {
  console.log("Server started on port 3000");
});