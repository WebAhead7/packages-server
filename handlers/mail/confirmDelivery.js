require("dotenv").config();
const nodemailer = require("nodemailer");

const confirmDelivery = async (req, res, next) => {
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
    text: `Great news!!
           Package delivered!`,
    // html: "<h1>HTML CAN BE SENT HERE IF NEEDED</h1><p>Yes Yes it is working</p>",
  };

  res.status(200).json({ message: "Package delivered" });

  try {
    isSent = await transporter.sendMail(mailOptions);
  } catch (e) {
    const error = new Error(e.message);
    error.status = 400;
    next(error);
  }

  return;
};

module.exports = confirmDelivery;
