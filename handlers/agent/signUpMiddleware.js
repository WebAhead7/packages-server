const { Agent } = require("../../db/db");
const bcrypt = require("bcrypt");

const signUpMiddleware = async (req, res, next) => {
  const isFound = res.agent;

  try {
    if (isFound) {
      const error = new Error("this email is already exisis");
      error.status = 403;
      return next(error);
    }

    const hashed = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashed;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = signUpMiddleware;
