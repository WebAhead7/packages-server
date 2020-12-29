const jwt = require("jsonwebtoken");

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  let updatedToken;
  const error = new Error("Unauthorized");

  if (token == null) {
    error.status = 401;
    return next(error);
  }

  try {
    updatedToken = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  } catch (err) {
    error.status = 403;
    return next(error);
  }

  req.agent = updatedToken;
  next();
};

module.exports = authenticateToken;
