const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: String,
  age: Number,
  profession: String,
  location: String,
  notes: String
});

module.exports = mongoose.model('Profile', ProfileSchema);
