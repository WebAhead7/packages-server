const { Owner } = require("../../db/db");

const getOwnerMiddleware = async (req, res, next) => {
  let owner;

  try {
    owner = await Owner.findById(req.params.id);
    if (owner == null) {
      const error = new Error("Cannot find owner");
      error.status = 404;
      return next(error);
    }
  } catch (err) {
    return next(err);
  }

  res.owner = owner;
  next();
};

module.exports = getOwnerMiddleware;
