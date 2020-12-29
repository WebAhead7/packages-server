const { Owner } = require("../../db/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.SECRET;

const signUpMiddleware = async (req, res, next) => {
  const isFound = req.owner;

  try {
    if (isFound) {
      return res.status().json({ message: "this email is already exisis" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashed;
    const token = jwt.sign({ id: req.body.id }, SECRET);

    res.token = { access_token: token };
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = signUpMiddleware;
