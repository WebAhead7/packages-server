const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  let verifiedToken;
  const error = new Error("Unauthorized");

  if (token == null) {
    error.status = 401;
    return next(error);
  }

  try {
    verifiedToken = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  } catch (err) {
    error.status = 403;
    return next(error);
  }

  if (verifiedToken.owner.role !== "owner") {
    error.status = 403;
    return next(error);
  }

  res.owner = verifiedToken;
  res.ownerId = verifiedToken.owner._id;
  next();
};

module.exports = authenticateToken;
