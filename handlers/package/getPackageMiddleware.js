const { Business } = require("../../db/db");

const getPackage = async (req, res, next) => {
  let packages;

  try {
    packages = await Business.findById(req.params.businessId);
    if (packages == null) {
      const error = new Error("Cannot find package");
      error.status = 404;
      return next(error);
    }
  } catch (err) {
    return next(err);
  }

  res.packages = packages.items;
  next();
};

module.exports = getPackage;
