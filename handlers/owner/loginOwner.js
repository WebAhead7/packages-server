const { Owner } = require("../../db/db");
const bcrypt = require("bcrypt");

const loginOwner = async (req, res, next) => {
  const owner = res.owner;
  const login = {
    email: req.body.email,
    password: req.body.password,
  };

  try {
    if (owner) {
      if (owner[0].password === login.password) {
        return res.send("Success");
      } else {
        return res.send("Not Allowed");
      }
    } else {
    }
  } catch (err) {
    err.status = 400;
    return next(err);
  }
  res.status(200).json(owner);
};

module.exports = loginOwner;

//await bcrypt.compare(req.body.password, user.password)
