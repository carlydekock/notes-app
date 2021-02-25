'use strict';

const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  type: { default: 'private', enum: ['public', 'private'], },
  notebody: { type: String, required: true },
});

const noteModel = mongoose.model('notes', noteSchema);

module.exports = noteModel;
