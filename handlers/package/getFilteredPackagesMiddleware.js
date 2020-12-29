const { Business } = require("../../db/db");

const getFilteredPackagesMiddleware = async (req, res, next) => {
  let packages;

  try {
    packages = await Business.find().select({ items: 1, _id: 0 })
    packages = packages.map(obj => obj.items).reduce((a, b) => a.concat(b), []);
    if (packages == null) {
      const error = new Error("Cannot find packages");
      error.status = 404;
      return next(error);
    }
  } catch (err) {
    return next(err);
  }

  res.packages = packages;
  next();
};

module.exports = getFilteredPackagesMiddleware;
