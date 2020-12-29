const getOnePackage = (req, res, next) => {
  const packageId = req.params.packageId;

  const package = res.packages.find((package) => package["_id"] == packageId);

  res.json(package);
};

module.exports = getOnePackage;
