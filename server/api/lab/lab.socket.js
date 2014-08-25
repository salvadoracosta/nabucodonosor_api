/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Lab = require('./lab.model');

exports.register = function(socket) {
  Lab.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Lab.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('lab:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('lab:remove', doc);
}