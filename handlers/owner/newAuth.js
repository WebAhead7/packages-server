const jwt = require("jsonwebtoken");

const loginOwner = (req, res, next) => {
  const owner = res.owner;

  if (!owner) {
    const error = new Error("User not found");
    error.status = 404;
    return next(error);
  }
  const accessToken = jwt.sign({ owner: owner }, process.env.SECRET);

  return res.status(201).json({ owner: owner, accessToken: accessToken });
};

module.exports = loginOwner;
