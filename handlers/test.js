const { Business } = require("../db/db");

const getBusiness = async (req, res, next) => {
  let business;

  try {
    business = await Business.findById(req.params.id);
    if (business == null) {
      return res.status(404).json({ message: "Cannot find business" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.business = business;
  next();
};

module.exports = getBusiness;
