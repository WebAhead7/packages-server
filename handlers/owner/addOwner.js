const Owner = require("../../db/owner");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const addOwner = async (req, res, next) => {
  let newOwner;
  const owner = new Owner({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone,
    mobile: req.body.mobile,
    email: req.body.email,
    password: req.body.password,
    idImage: req.body.idImage,
    idNumber: req.body.idNumber,
    address: req.body.address,
    payment: req.body.payment,
  });

  try {
    newOwner = await owner.save();
  } catch (err) {
    err.status = 400;
    return next(err);
  }

  newOwner.idImage = "";
  newOwner.payment = "";

  const token = jwt.sign({ owner: newOwner }, process.env.SECRET);
  res.status(201).json({ owner: newOwner, accessToken: token });
};

module.exports = addOwner;
