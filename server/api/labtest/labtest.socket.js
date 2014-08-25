/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Labtest = require('./labtest.model');

exports.register = function(socket) {
  Labtest.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Labtest.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('labtest:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('labtest:remove', doc);
}