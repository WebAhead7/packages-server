const Agent = require("../../db/agent");

const getAgent = (req, res, next) => {
  return res.status(200).json(res.agent);
};

module.exports = getAgent;
