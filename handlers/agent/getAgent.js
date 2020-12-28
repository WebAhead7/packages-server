const { Agent } = require("../../db/db");

const getAgent = async (req, res, next) => {
  const agentById = res.agent;
  try {
    res.status(200).json(agentById);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
};

module.exports = getAgent;
