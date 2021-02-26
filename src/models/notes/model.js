'use strict';

const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  type: { type: String, required: true, default: 'private', enum: ['public', 'private'], },
  note: { type: String, required: true },
  author: { type: String, required: true }
});

const noteModel = mongoose.model('notes', noteSchema);

module.exports = noteModel;
