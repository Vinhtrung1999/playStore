const mongoose = require('mongoose');
const { commentSchema } = require('./comment');

const applicationSchema = new mongoose.Schema({
  owner: {
    type: String,
    default: '',
  },
  category: {
    type: [String],
    default: [],
  },
  status: {
    type: Boolean,
    default: false,
  },
  createdDate: {
    type: Date,
    default: new Date().toISOString(),
  },
  like: {
    type: Number,
    default: 0,
  },
  download: {
    type: Number,
    default: 0,
  },
  resource: {
    type: String,
    required: true,
  },
  comment: {
    type: [commentSchema],
    default: [],
  },
  description: {
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('application', applicationSchema);