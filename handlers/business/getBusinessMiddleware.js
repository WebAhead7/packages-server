const Business = require("../../db/business");

const getBusiness = async (req, res, next) => {
  let business;

  try {
    business = await Business.findById(req.params.id);
    if (business == null) {
      const error = new Error("Cannot find business");
      error.status = 404;
      return next(error);
    }
  } catch (err) {
    return next(err);
  }

  res.business = business;
  next();
};

module.exports = getBusiness;
