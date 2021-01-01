const Business = require("../../db/business");
const deletePackage = async (req, res, next) => {
  console.log(req.params);

  try {
    await Business.findByIdAndUpdate(
      { _id: `${req.params.businessId}` },
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
