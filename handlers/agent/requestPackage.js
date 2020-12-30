const { Agent } = require("../../db/db");

const requestPackage = async (req, res, next) => {
  package_id = req.params.packageId;
  agent = res.agent;

  try {
    await Agent.findOneAndUpdate(
      { _id: agent._id },
      { $push: { items_id: package_id } }
    );

    return res.status(200).json({
      msessage: "pacakege has been added for you",
      packages: agent.items_id,
    });
  } catch (err) {
    err.status = 404;
    return next(err);
  }
};

module.exports = requestPackage;
