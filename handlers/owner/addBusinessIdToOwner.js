const Owner = require("../../db/owner");

const updateOwner = async (req, res, next) => {
  const ownerId = res.owner.owner._id;
  const business = res.business;
  try {
    await Owner.findOneAndUpdate(
      { _id: ownerId },
      {
        businessId: business._id,
      }
    );
  } catch (err) {
    err.status = 400;
    return next(err);
  }

  return res.status(201).json({ message: "Store created successfully!" });
};

module.exports = updateOwner;
