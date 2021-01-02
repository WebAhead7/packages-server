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
    //to: `${package.client.email}`
    to: "alaabashiy@gmail.com",
    subject: "Package update",
    text: `Your package on it's way! get ready,
           Give the following confirmation code to the agent when he/she arrives.
           Confirmation code: ${package.clientConfirmation}`,
    // html: "<h1>HTML CAN BE SENT HERE IF NEEDED</h1><p>Yes Yes it is working</p>",
  };

  try {
    isSent = await transporter.sendMail(mailOptions);
  } catch (e) {
    const error = new Error(e.message);
    error.status = 400;
    next(error);
  }
};

module.exports = confirmOwner;
