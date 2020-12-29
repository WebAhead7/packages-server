const { Agent } = require("../../db/db");

const getAgent = (req, res, next) => {
  const agentById = res.agent;
  return res.status(200).json(agentById);
};

module.exports = getAgent;
