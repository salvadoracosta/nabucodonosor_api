'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LabSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Lab', LabSchema);