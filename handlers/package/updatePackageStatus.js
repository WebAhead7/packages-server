const { Business } = require("../../db/db");

const updatePackageStatus = async (req, res, next) => {
  const packageId = req.params.packageId;
  const businessId = req.params.businessId;

  const status = req.body.status;

  try {
    await Business.findOneAndUpdate(
      { _id: `${businessId}`, "items._id": `${packageId}` },
      {
        $set: {
          "items.$.status": status,
        },
      }
    );

    return res.status(201).json({ message: "Status updated successfuly" });
  } catch (err) {
    return next(err);
  }
};

module.exports = updatePackageStatus;
