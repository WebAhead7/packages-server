const Package = require("../../db/package");

const getOnePackageNext = async (req, res, next) => {
  let package;

  try {
    package = await Package.findById(req.params.packageId);

    if (package == null) {
      const error = new Error("Cannot find package");
      error.status = 404;
      return next(error);
    }
  } catch (err) {
    return next(err);
  }

  res.wantedPackage = package;
  return next();
};

module.exports = getOnePackageNext;
