const Business = require("../../db/business");
const Package = require("../../db/business");

const deletePackage = async (req, res, next) => {
  const owner = res.owner.owner;

  try {
    await Package.findOneAndDelete(req.params.packageId);

    await Business.findByIdAndUpdate(
      { _id: `${owner.businessId}` },
      { $pull: { items: { _id: `${req.params.packageId}` } } }
    );
    return res
      .status(200)
      .json({ message: "Package was deleted succesfully!" });
  } catch (err) {
    err.status = 400;
    return next(err);
  }
};

module.exports = deletePackage;
