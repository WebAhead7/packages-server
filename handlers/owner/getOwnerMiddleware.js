const { Owner } = require("../../db/db");

const getOwnerMiddleware = async (req, res, next) => {
  let owner;

  try {
    owner = await Owner.findById(req.params.id);
    if (owner == null) {
      return res.status(404).json({ message: "Cannot find owner" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.owner = owner;
  next();
};

module.exports = getOwnerMiddleware;
