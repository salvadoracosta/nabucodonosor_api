'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Analisisv2Schema = new Schema({
  paciente: String,
  labtest: String
});

module.exports = mongoose.model('Analisisv2', Analisisv2Schema);