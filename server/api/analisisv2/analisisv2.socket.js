/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Analisisv2 = require('./analisisv2.model');

exports.register = function(socket) {
  Analisisv2.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Analisisv2.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('analisisv2:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('analisisv2:remove', doc);
}