const { Business } = require("../../db/db");

const getClient = async (req, res, next) => {
  let clients;

  try {
    clients = await Business.findById(req.params.businessId);

    if (clients == null) {
      const error = new Error("Cannot find client");
      error.status = 404;
      return next(error);
    }
  } catch (err) {
    return next(err);
  }

  console.log(clients);

  res.clients = clients;
  next();
};

module.exports = getClient;
