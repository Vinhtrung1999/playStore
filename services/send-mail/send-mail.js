const ejs = require('ejs');
const nodemailer = require('nodemailer');
const { mailService } = require('../config');

let sendMail = async (receiver, subject, mailTemplate, application) => {
  try {
    var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: mailService.mailAdmin,
        pass: mailService.mailPassword,
      },
    });
    const bodyMail = await ejs.renderFile(__dirname + `/body-mail/${mailTemplate}.ejs`, { application });
    let mailOptions = {
      to: receiver,
      subject: subject,
      html: bodyMail,
    };
    let result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  sendMail,
}