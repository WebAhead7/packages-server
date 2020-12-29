const { Agent } = require("../../db/db");

const getAgentByEmail = async (req, res, next) => {
  const email = req.body.email;
  let agent;

  try {
    agent = await Agent.find({
      email: email,
    });

    if (agent == null || agent.length == 0) {
      agent = false;
    }
  } catch (err) {
    return next(err);
  }

  res.agent = agent;
  next();
};

module.exports = getAgentByEmail;
