const Business = require("../../db/business");

const addClientToPackage = async (req, res, next) => {
  let business;
  const clientId = res.wantedPackage.clientId;

  try {
    business = await await Business.findById(req.params.businessId);

    if (business == null) {
      const error = new Error("Cannot find client");
      error.status = 404;
      return next(error);
    }
  } catch (err) {
    return next(err);
  }

  const client = business.clients.find((client) => client["_id"] == clientId);
  const package = res.wantedPackage;

  const message = "Confirmation code has been sent to the owner !";

  res.client = client;
  package.client = client;

  res.status(200).json({
    package,
    message: message,
  });

  return next();
};

module.exports = addClientToPackage;
