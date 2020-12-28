const { package } = require("../../db/db");
const updateAgent = require("./updateAgent");

const updateStatus = async (req, res, next) => {
  const status = res.status;

  try {
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.export = updateAgent;
