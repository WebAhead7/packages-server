const { Business } = require("../../db/db");

const getFilteredPackagesMiddleware = async (req, res, next) => {
  let packages;

  try {
    packages = await Business.find().select({
      "items.businessId": 1,
      "items.name": 1,
      "items.weight": 1,
      "items.delivery_price": 1,
      "items.quantity": 1,
      "items.track_number": 1,
      "items.createdAt": 1,
      "items.client.address.city": 1,
      "items.client.address.street": 1,
      "items.client.address.longitude": 1,
      "items.client.address.latitude": 1,
      "items.storeAdress.city": 1,
      "items.storeAdress.street": 1,
      "items.storeAdress.longitude": 1,
      "items.storeAdress.latitude": 1,
      "items.status": 1,
      "items.agentId": 1,
      "items._id": 1,

      _id: 0,
    });

    packages = packages
      .map((obj) => obj.items)
      .reduce((a, b) => a.concat(b), []);

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
