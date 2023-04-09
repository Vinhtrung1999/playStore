const application = require('../../models/application');

const delComment = async (req, res) => {
  try {
    const { idApplication, idComment } = req.body;
    const result = await application.updateOne(
      { _id: idApplication },
      {
        $pull: {
          comment: { _id: idComment },
        },
      },
    );

    return res.json({
      ErrorCode: 0,
      Message: result,
    });
  } catch (error) {
    return res.json({
      ErrorCode: 0,
      Message: error.message,
    });
  }
};

const addComment = async (req, res) => {
  try {
    const { idApplication, comment } = req.body;
    const result = await application.updateOne(
      { _id: idApplication },
      {
        $push: {
          comment,
        },
      },
    );

    return res.json({
      ErrorCode: 0,
      Message: result,
    });
  } catch (error) {
    return res.json({
      ErrorCode: 0,
      Message: error.message,
    });
  }
}

module.exports = {
  delComment,
  addComment,
}
