const { Business } = require("../../db/db");

const sendConfirmationCode = async (req, res, next) => {
  try {
    const business = await Business.find({ _id: req.params.packageId });
    const package = business.items.find((package) => {
      package["_id"] == req.params.packageId;
    });

    res.status(200).json({ confirmation: package.confirmation });
  } catch (err) {
    err.status = 400;
    return next(err);
  }
};

module.exports = sendConfirmationCode;
