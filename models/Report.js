var mongoose = require('mongoose');

var Report = mongoose.Schema({
  id: Number,
  readings: [],
});

module.exports = mongoose.model('Report', Report);
