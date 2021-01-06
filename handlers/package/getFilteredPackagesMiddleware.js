const Package = require("../../db/package");

const getFilteredPackagesMiddleware = async (req, res, next) => {
  let packages;
  try {
    packages = await Package.find()
      .select({
        confirmation: 0,
        clientConfirmation: 0,
      })
      .populate({
        path: "address",
        model: "Business",
        select: ["name", "mobile", "phone", "address"],
      })
      .exec();

    if (packages == null) {
      const error = new Error("Cannot find packages");
      error.status = 404;
      return next(error);
    }
  } catch (err) {
    return next(err);
  }
  res.packages = packages;
  return next();
};

module.exports = getFilteredPackagesMiddleware;
