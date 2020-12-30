const { Business } = require("../../db/db");

const getRequestedPackageBusiness = async (req, res, next) => {
  business_id = req.params.businessId;
  try {
    const business = await Business.find({
      _id: business_id,
    });
    business.items = [];
    res.status(200).json({ business });
  } catch (err) {
    err.status = 404;
    return next(err);
  }
};

module.exports = getRequestedPackageBusiness;
