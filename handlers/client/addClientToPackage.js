const { Business } = require("../../db/db");

const addClientToPackage = async (req, res, next) => {
  let business;
  const clientId = res.wantedPackage.clientId;

  try {
    business = await await Business.findById(req.params.businessId);

    if (clients == null) {
      const error = new Error("Cannot find client");
      error.status = 404;
      return next(error);
    }
  } catch (err) {
    return next(err);
  }

  console.log(business.clients);

  const client = clients.find((client) => client["_id"] == clientId);

  res.client = client;
  next();
};

module.exports = addClientToPackage;
