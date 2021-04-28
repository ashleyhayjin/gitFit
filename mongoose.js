const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/workout", {useNewUrlParser: true, useFindAndModify: false});

module.exports = mongoose.connection;