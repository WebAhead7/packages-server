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
    updatedToken = await jwt.verify(token, process.env.SECRET);
  } catch (err) {
    error.status = 403;
    return next(error);
  }

  if (updatedToken.agent.role != "agent") {
    error.status = 403;
    return next(error);
  }

  res.agent = updatedToken;

  return next();
};

module.exports = authenticateToken;
