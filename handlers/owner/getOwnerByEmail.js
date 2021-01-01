const Owner = require("../../db/owner");

const getOwnerByEmail = async (req, res, next) => {
  const email = req.body.email;
  let owner;

  try {
    owner = await Owner.find({
      email: email,
    });

    if (owner == null || owner.length == 0) {
      owner = false;
    }
  } catch (err) {
    return next(err);
  }

  res.owner = owner;
  next();
};

module.exports = getOwnerByEmail;
