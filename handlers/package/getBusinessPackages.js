const Package = require("../../db/package");

const getBusinessPackages = async (req, res, next) => {
  const owner = res.owner.owner;
  let packages;

  try {
    packages = await Package.find({ businessId: `${owner.businessId}` });

    if (packages == null) {
      const error = new Error("Cannot find package");
      error.status = 404;
      return next(error);
    }
  } catch (err) {
    return next(err);
  }

  return res.status(200).json(packages);
};

module.exports = getBusinessPackages;
