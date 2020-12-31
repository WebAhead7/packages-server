const getOnePackageNext = (req, res, next) => {
  const packageId = req.params.packageId;
  const package = res.packages.find((package) => package["_id"] == packageId);

  res.wantedPackage = package;

  return next();
};

module.exports = getOnePackageNext;
