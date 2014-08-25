'use strict';

var _ = require('lodash');
var Labtest = require('./labtest.model');

// Get list of labtests
exports.index = function(req, res) {
  Labtest.find(function (err, labtests) {
    if(err) { return handleError(res, err); }
    return res.json(200, labtests);
  });
};

// Get a single labtest
exports.show = function(req, res) {
  Labtest.findById(req.params.id, function (err, labtest) {
    if(err) { return handleError(res, err); }
    if(!labtest) { return res.send(404); }
    return res.json(labtest);
  });
};

// Creates a new labtest in the DB.
exports.create = function(req, res) {
  Labtest.create(req.body, function(err, labtest) {
    if(err) { return handleError(res, err); }
    return res.json(201, labtest);
  });
};

// Updates an existing labtest in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Labtest.findById(req.params.id, function (err, labtest) {
    if (err) { return handleError(res, err); }
    if(!labtest) { return res.send(404); }
    var updated = _.merge(labtest, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, labtest);
    });
  });
};

// Deletes a labtest from the DB.
exports.destroy = function(req, res) {
  Labtest.findById(req.params.id, function (err, labtest) {
    if(err) { return handleError(res, err); }
    if(!labtest) { return res.send(404); }
    labtest.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}