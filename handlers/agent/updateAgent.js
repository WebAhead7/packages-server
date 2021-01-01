const Agent = require("../../db/agent");

const updateAgent = async (req, res, next) => {
  const id = req.params.id;
  const updates = req.body;

  try {
    const agent = await Agent.findByIdAndUpdate(id, updates, { new: true });
    return res.status(200).json(agent);
  } catch (err) {
    err.status = 404;
    return next(err);
  }
};

module.exports = updateAgent;
