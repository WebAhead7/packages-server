const { Business } = require("../../db/db");

const deletePackage = async (req, res, next) => {
  try {
    await Business.findByIdAndUpdate(
      { _id: `${req.params.businessId}` },
      { $pull: { clients: { _id: `${req.params.clientId}` } } }
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
