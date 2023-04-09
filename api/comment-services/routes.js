const express = require('express');
const {
  delComment,
  addComment,
} = require('./comment-services-controllers');

const routerComment = express.Router();

routerComment.post('/add-comment', addComment);
routerComment.delete('/delete-comment', delComment);

module.exports = routerComment;
