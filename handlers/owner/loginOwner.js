const { Owner } = require("../../db/db");
const { getOwnerByEmail } = require("../../handlers/owner/loginOwner");

const loginOwner = async (req, res, next) => {
  const owner = res.owner;
  const login = {
    email: req.body.email,
    password: req.body.password,
  };

  try {
    console.log(owner);
    console.log(login);
    res.status(200).json(owner);
  } catch (err) {
    err.status = 400;
    return next(err);
  }
};

module.exports = loginOwner;
