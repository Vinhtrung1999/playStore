const user = require('../../models/user');
const {
  queryByObject,
  createByObject,
} = require('../../services/database');

const userLogin = async (req, res) => {
  try {
    const { credential } = req.body;
    const crePayload = credential.split('.')[1];
    const payloadDecode = JSON.parse(Buffer.from(crePayload, 'base64').toString());

    const userPayload = {
      fullName: payloadDecode.name,
      email: payloadDecode.email,
      avatar: payloadDecode.picture,
    }

    let result;
    const checkExistedUser = await queryByObject({ email: userPayload.email }, user);
    if (checkExistedUser.length) {
      result = checkExistedUser[0];
    } else {
      result = await createByObject(userPayload, user);
    }

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
  userLogin,
}