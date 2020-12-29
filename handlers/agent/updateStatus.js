const { package } = require("../../db/db");
const updateAgent = require("./updateAgent");

const updateStatus = async (req, res, next) => {
  const status = res.status;

  try {
  } catch (err) {
    err.status = 404;
    return next(err);
  }
};

module.export = updateAgent;
