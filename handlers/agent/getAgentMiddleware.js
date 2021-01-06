const Agent = require("../../db/agent");

const getAgent = async (req, res, next) => {
  const agent = res.agent.agent;
  console.log(agent._id);
  let agentById;
  try {
    agentById = await Agent.findById(agent._id).exec();
    if (agentById == null || agentById.length === 0) {
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
