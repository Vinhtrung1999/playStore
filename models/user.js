const mongoose = require('mongoose');

const enjoyAppSchema = new mongoose.Schema({
  idApplication: {
    type: String,
    require: true,
  },
  createdDate: {
    type: Date,
    default: new Date().toISOString(),
  },
});

const downloadedAppSchema = new mongoose.Schema({
  idApplication: {
    type: String,
    require: true,
  },
  createdDate: {
    type: Date,
    default: new Date().toISOString(),
  },
});

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  createdDate: {
    type: Date,
    default: new Date().toISOString(),
  },
  enjoyApplication: {
    type: [enjoyAppSchema],
    default: [],
  },
  downloadedApplication: {
    type: [downloadedAppSchema],
    default: [],
  },
  avatar: {
    type: String,
    default: '',
  },
  role: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model('user', userSchema);