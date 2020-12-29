const { Owner } = require("../../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginOwner = async (req, res, next) => {
  const owner = res.owner;
  owner.role = "shopowner";
  const login = {
    email: req.body.email,
    password: req.body.password,
  };

  try {
    if (!owner) {
      const error = new Error("User not found");
      error.status = 404;
      return next(error);
    }
    if (owner[0].password !== login.password) {
      const error = new Error("Incorrect password");
      error.status = 403;
      return next(error);
    }
  } catch (err) {
    err.status = 400;
    next(err);
  }

  const authenticatedOwner = {
    id: owner._id,
    role: owner.role,
    businessId: owner.businessId,
  };

  const accessToken = jwt.sign(
    authenticatedOwner,
    process.env.ACCESS_TOKEN_SECRET
  );

  res.status(200).json(accessToken);
};

module.exports = loginOwner;

//await bcrypt.compare(req.body.password, user.password)
