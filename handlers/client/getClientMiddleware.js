const { Business } = require("../../db/db");

const getPackage = async (req, res, next) => {
  let clients;

  try {
    clients = await Business.findById(req.params.id);
    if (clients == null) {
      const error = new Error("Cannot find client");
      error.status = 404;
      return next(error);
    }
  } catch (err) {
    return next(err);
  }

  res.clients = clients;
  next();
};

module.exports = getPackage;
