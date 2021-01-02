const Package = require("../../db/package");

const addClientToPackage = async (req, res, next) => {
  let package;
  const clientId = res.wantedPackage.clientId;
  const packageId = res.wantedPackage._id;

  try {
    package = await Package.findById(packageId)
      .populate({ path: "client", model: "Client", populate: "client" })
      .populate({
        path: "address",
        model: "Business",
        select: ["name", "mobile", "phone", "address"],
      })
      .select({ confirmation: 0, clientConfirmation: 0 })
      .exec();

    if (package == null) {
      const error = new Error("Cannot find client");
      error.status = 404;
      return next(error);
    }
  } catch (err) {
    console.log(err);
    return next(err);
  }

  const message = "Confirmation code has been sent to the owner !";

  res.status(200).json({
    package,
    message: message,
  });

  res.wantedPackage = package;

  return next();
};

module.exports = addClientToPackage;
