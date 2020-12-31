require("dotenv").config();
const nodemailer = require("nodemailer");

const confirmOwner = async (req, res, next) => {
  const package = res.wantedPackage;
  let isSent;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codedmediagroups@gmail.com",
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: "codedmediagroups@gmail.com",
    to: "howtodothings7@gmail.com",
    subject: "Confirmation",
    text: `Confirmation code: ${package.confirmation}`,
    // html: "<h1>HTML CAN BE SENT HERE IF NEEDED</h1><p>Yes Yes it is working</p>",
  };

  const mailOptions2 = {
    from: "codedmediagroups@gmail.com",
    to: "alaabashiy@gmail.com",
    subject: "Package update",
    text: `Your package is packed and ready to be sent`,
  };

  try {
    isSent = await transporter.sendMail(mailOptions);

    if (isSent) {
      await transporter.sendMail(mailOptions2);
    }
  } catch (e) {
    const error = new Error(e.message);
    error.status = 400;
    next(error);
  }

  const message = "Confirmation code has been sent to the owner !";

  return res.status(200).json({
    package,
    message: message,
  });
};

module.exports = confirmOwner;
