const application = require('../../models/application');
const {
  queryByObject,
  createByObject,
  updateByObject,
} = require('../../services/database');

const getApplicationList = async (req, res) => {
  try {
    const result = await queryByObject({}, application);
    return res.json({
      totalSize: result.length,
      data: result,
    });
  } catch (error) {
    return res.json({
      errorCode: 1,
      message: error.message,
    });
  }
};

const findOneApplication = async (req, res) => {
  try {
    const { idApplication } = req.body;
    const result = await queryByObject({ _id: idApplication }, application);
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

const findApplicationObject = async (req, res) => {
  try {
    const obj = req.body;
    const result = await queryByObject(obj, application);
    return res.json({
      totalSize: result.length,
      data: result,
    });
  } catch (error) {
    return res.json({
      errorCode: 1,
      message: error.message,
    });
  }
};

const addApplication = async (req, res) => {
  try {
    const apps = req.body;
    const result = await createByObject(apps, application);

    return res.json({
      message: result,
    });
  } catch (error) {
    return res.json({
      errorCode: 1,
      message: error.message,
    });
  }
};

// TODO should be delete
const addSample = async (req, res) => {
  try {
    const newApplication = new application({
      owner: 'trung tran',
      category: ['action', 'funny'],
      resource: 'https://abc/xyz',
      comment: [{
        owner: 'admin 1',
        content: 'This is best application I know',
      },
      {
        owner: 'admin 1',
        content: 'You should have check multiple perspective after upload new vers',
      }],
      description: 'This is a best choice in summer 2023',
    });
    const result = await newApplication.save();

    return res.json({
      message: result,
    });
  } catch (error) {
    return res.json({
      errorCode: 1,
      message: error.message,
    });
  }
};

const updateApplication = async (req, res) => {
  try {
    const { idApplication, newApplication } = req.body;
    const result = await updateByObject(newApplication, application, { _id: idApplication });
    return res.json({
      message: result,
    });
  } catch (error) {
    return res.json({
      errorCode: 1,
      message: error.message,
    });
  }
};

module.exports = {
  getApplicationList,
  findOneApplication,
  addApplication,
  addSample,
  findApplicationObject,
  updateApplication,
}
