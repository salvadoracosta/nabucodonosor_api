'use strict';

var _ = require('lodash');
var Lab = require('./lab.model');

// Get list of labs
exports.index = function(req, res) {
  Lab.find(function (err, labs) {
    if(err) { return handleError(res, err); }
    return res.json(200, labs);
  });
};

// Get a single lab
exports.show = function(req, res) {
  Lab.findById(req.params.id, function (err, lab) {
    if(err) { return handleError(res, err); }
    if(!lab) { return res.send(404); }
    return res.json(lab);
  });
};

// Creates a new lab in the DB.
exports.create = function(req, res) {
  Lab.create(req.body, function(err, lab) {
    if(err) { return handleError(res, err); }
    return res.json(201, lab);
  });
};

// Updates an existing lab in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Lab.findById(req.params.id, function (err, lab) {
    if (err) { return handleError(res, err); }
    if(!lab) { return res.send(404); }
    var updated = _.merge(lab, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, lab);
    });
  });
};

// Deletes a lab from the DB.
exports.destroy = function(req, res) {
  Lab.findById(req.params.id, function (err, lab) {
    if(err) { return handleError(res, err); }
    if(!lab) { return res.send(404); }
    lab.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}