const Agent = require("../../db/agent");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginAgent = async (req, res, next) => {
  const agent = res.agent[0];

  const login = {
    email: req.body.email,
    password: req.body.password,
  };

  try {
    if (!agent) {
      const error = new Error("User not found");
      error.status = 404;
      return next(error);
    }

    const isMatch = await bcrypt.compare(login.password, agent.password);

    if (!isMatch) {
      const error = new Error("Incorrect password");
      error.status = 403;
      return next(error);
    }
  } catch (err) {
    err.status = 400;
    next(err);
  }

  const accessToken = jwt.sign({ agent }, process.env.ACCESS_TOKEN_SECRET);

  agent.payment = "";

  res.status(200).json({ ...agent, accessToken: accessToken });
};

module.exports = loginAgent;
