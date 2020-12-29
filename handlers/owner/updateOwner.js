const { Owner } = require("../../db/db");

const updateOwner = async (req, res, next) => {
  const ownerId = req.params.id;
  const owner = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  };

  try {
    const updatedOwner = await Owner.findOneAndUpdate(
      { _id: ownerId },
      {
        ...owner,
      }
    );
    res.status(201).json({ message: "Owner updated successfully" });
  } catch (err) {
    err.status = 400;
    return next(err);
  }
};

module.exports = updateOwner;
