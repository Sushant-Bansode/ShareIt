const nodemailer = require("nodemailer");
module.exports = async ({ from, to, subject, text, html }) => {
  let transporter = nodemailer.createTransport({
    service: process.env.service,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD, // generated  password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `inShare <UdayBerad>`, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: html, // html body
  });
};
