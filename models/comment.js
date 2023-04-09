const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  owner: {
    type: String,
    default: '',
  },
  createdDate: {
    type: Date,
    default: new Date().toISOString(),
  },
  content: {
    type: String,
    require: true,
  }
});

module.exports = {
  commentSchema,
};