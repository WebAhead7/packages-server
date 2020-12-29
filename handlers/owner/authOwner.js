const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const error = new Error("Unauthorized");
  if (token == null) {
    error.status = 401;
    return next(error);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      error.status = 403;
      return next(error);
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
