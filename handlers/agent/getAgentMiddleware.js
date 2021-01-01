const Agent = require("../../db/agent");

const getAgent = async (req, res, next) => {
  const agent_id = req.params.id;
  let agentById;
  try {
    agentById = await Agent.findById(agent_id).exec();
    if (agentById == null) {
      const error = new Error("Cannot find agent");
      error.status = 404;
      return next(error);
    }
  } catch (err) {
    return next(err);
  }
  res.agent = agentById;
  next();
};

module.exports = getAgent;
