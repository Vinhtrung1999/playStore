const application = require('../../models/application');

const getApplicationList = async (req, res) => {
  try {
    const result = await application.find({});
    return res.json({
      total: result.length,
      data: result,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

const findOneApplication = async (req, res) => {
  try {
    const { idApplication } = req.body;
    const result = await application.find({ _id: idApplication });
    return res.json({
      data: result,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

const addApplication = async (req, res) => {
  try {
    const apps = req.body;
    const newApplication = new application(apps);
    const result = await newApplication.save();

    return res.json({
      message: result,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

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
      message: error.message,
    });
  }
}

module.exports = {
  getApplicationList,
  findOneApplication,
  addApplication,
  addSample,
}
