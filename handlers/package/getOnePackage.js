const Package = require("../../db/package");

const getOnePackage = async (req, res, next) => {
  let package;

  try {
    package = await Package.findById(req.params.packageId)
      .populate({
        path: "address",
        model: "Business",
        select: ["name", "mobile", "phone", "address"],
      })
      .exec();

    if (package == null) {
      const error = new Error("Cannot find package");
      error.status = 404;
      return next(error);
    }
  } catch (err) {
    return next(err);
  }

  return res.status(200).json(package);
};

module.exports = getOnePackage;
