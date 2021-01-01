const Business = require("../../db/business");

const getRequestedPackageBusiness = async (req, res, next) => {
  const businessId = req.params.businessId;
  let business;
  try {
    // business = await Business.find({
    //   _id: businessId,
    // });

    business = await Business.find({ _id: businessId }).select({
      name: 1,
      address: 1,
      phone: 1,
      email: 1,
      _id: 0,
    });
  } catch (err) {
    err.status = 404;
    return next(err);
  }
  res.business = business[0];
  return next();
};

module.exports = getRequestedPackageBusiness;
