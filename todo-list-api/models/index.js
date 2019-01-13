const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect(
  "mongodb://localhost/json-api",
  { useNewUrlParser: true }
);
mongoose.Promise = Promise;
module.exports.Todo = require('./todo');