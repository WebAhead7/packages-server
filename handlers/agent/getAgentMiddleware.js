const { Agent } = require("../../db/db");

const getAgent = async (req, res, next) => {
  const agent_id = req.params.id;
  try {
    const agentById = await Agent.findById(agent_id).exec();
    if (agentByID == null) {
      return res.status(404).json({ message: "Cannot find agent" });
    }
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
  res.agent = agentById;
  next();
};

module.exports = getAgent;
