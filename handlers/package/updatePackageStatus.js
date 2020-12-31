const { Business } = require("../../db/db");

const updatePackageStatus = async (req, res, next) => {
  const packageId = req.params.packageId;
  const businessId = req.params.businessId;
  const status = req.body.status;
  const agent = res.agent.agent;

  try {
    await Business.findOneAndUpdate(
      { _id: `${businessId}`, "items._id": `${packageId}` },
      {
        $set: {
          "items.$.status": status,
          "items.$.agentId": `${agent._id}`,
        },
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
