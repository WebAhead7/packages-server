const { Owner } = require("../../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginOwner = async (req, res, next) => {
  const owner = res.owner[0];

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

    const isMatch = await bcrypt.compare(login.password, owner.password);

    if (!isMatch) {
      const error = new Error("Incorrect password");
      error.status = 403;
      return next(error);
    }
  } catch (err) {
    err.status = 400;
    next(err);
  }

  const accessToken = jwt.sign({ owner }, process.env.ACCESS_TOKEN_SECRET);

  res.status(200).json({ accessToken: accessToken });
};

module.exports = loginOwner;
