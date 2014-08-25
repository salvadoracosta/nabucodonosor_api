'use strict';

var _ = require('lodash');
var Analisisv2 = require('./analisisv2.model');

// Get list of analisisv2s
exports.index = function(req, res) {
  Analisisv2.find(function (err, analisisv2s) {
    if(err) { return handleError(res, err); }
    return res.json(200, analisisv2s);
  });
};

// Get a single analisisv2
exports.show = function(req, res) {
  Analisisv2.findById(req.params.id, function (err, analisisv2) {
    if(err) { return handleError(res, err); }
    if(!analisisv2) { return res.send(404); }
    return res.json(analisisv2);
  });
};

// Creates a new analisisv2 in the DB.
exports.create = function(req, res) {
  Analisisv2.create(req.body, function(err, analisisv2) {
    if(err) { return handleError(res, err); }
    return res.json(201, analisisv2);
  });
};

// Updates an existing analisisv2 in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Analisisv2.findById(req.params.id, function (err, analisisv2) {
    if (err) { return handleError(res, err); }
    if(!analisisv2) { return res.send(404); }
    var updated = _.merge(analisisv2, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, analisisv2);
    });
  });
};

// Deletes a analisisv2 from the DB.
exports.destroy = function(req, res) {
  Analisisv2.findById(req.params.id, function (err, analisisv2) {
    if(err) { return handleError(res, err); }
    if(!analisisv2) { return res.send(404); }
    analisisv2.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}