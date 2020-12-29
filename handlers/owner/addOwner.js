const { Owner } = require("../../db/db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const addOwner = async (req, res, next) => {
  const owner = new Owner({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
    idImage: req.body.idImage,
    businessId: req.body.businessId,
    address: req.body.address,
    payment: req.body.payment,
  });

  try {
    const newOwner = await owner.save();
    const token = jwt.sign({ owner: newOwner }, process.env.SECRET);

    res.status(201).json({ accessToken: token });
  } catch (err) {
    err.status = 400;
    return next(err);
  }
};

module.exports = addOwner;
