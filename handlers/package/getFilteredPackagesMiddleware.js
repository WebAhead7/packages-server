const { Business } = require("../../db/db");

const getFilteredPackagesMiddleware = async (req, res, next) => {
  let packages;

  try {
    packages = await Business.find({
      $and: [{ "items.status": "Pending" }, { "items.agentId": "Pending" }],
    });
    if (packages == null) {
      const error = new Error("Cannot find packages");
      error.status = 404;
      return next(error);
    }
  } catch (err) {
    return next(err);
  }

  res.packages = packages.items;
  next();
};

module.exports = getFilteredPackagesMiddleware;
