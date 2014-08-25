'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LabtestSchema = new Schema({
  user: String,
  type: String,
  active: Boolean
});

//module.exports = mongoose.model('Labtest', LabtestSchema);

var Analisisv2Schema = new Schema({
  paciente: String,
  labtest: [LabtestSchema]
});

module.exports = mongoose.model('Analisisv2', Analisisv2Schema);