const Package = require("../../db/package");

const updatePackageStatus = async (req, res, next) => {
  const packageId = req.params.packageId;
  const businessId = req.params.businessId;
  const status = req.body.status;
  const agent = res.agent.agent;

  try {
    await Package.findOneAndUpdate(
      { _id: `${packageId}` },
      {
        status: status,
        agentId: agent._id,
      }
    );
  } catch (err) {
    const error = new Error("Package status wasn't updated");
    error.status = 400;
    next(error);
  }

  return next();
};

module.exports = updatePackageStatus;
