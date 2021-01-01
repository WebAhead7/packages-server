const Agent = require("../../db/agent");

const addPackageIdToAgent = async (req, res, next) => {
  const package_id = req.params.packageId;
  const agent = res.agent;

  try {
    await Agent.findOneAndUpdate(
      { _id: agent.agent._id },
      { $addToSet: { items: package_id } }
    );
  } catch (err) {
    err.status = 404;
    return next(err);
  }

  next();
};

module.exports = addPackageIdToAgent;
