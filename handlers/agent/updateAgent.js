const { Agent } = require("../../db/db");

const updateAgent = async (req, res, next) => {
  const id = req.params.id;
  const updates = req.body;

  try {
    const agent = await Agent.findByIdAndUpdate(id, updates, { new: true });
    res.status(200).json(agent);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = updateAgent;
