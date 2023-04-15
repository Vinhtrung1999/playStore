const application = require('../../models/application');
const { updateByObject } = require('../../services/database');

const delComment = async (req, res) => {
  try {
    const { idApplication, idComment } = req.body;
    const result = await updateByObject({
      $pull: {
        comment: { _id: idComment },
      },
    }, application, { _id: idApplication });

    return res.json({
      data: result,
    });
  } catch (error) {
    return res.json({
      errorCode: 1,
      message: error.message,
    });
  }
};

const addComment = async (req, res) => {
  try {
    const { idApplication, comment } = req.body;
    const result = await updateByObject({
      $push: {
        comment,
      },
    }, application, { _id: idApplication });

    return res.json({
      data: result,
    });
  } catch (error) {
    return res.json({
      errorCode: 1,
      message: error.message,
    });
  }
}

module.exports = {
  delComment,
  addComment,
}
