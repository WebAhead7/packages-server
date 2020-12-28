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
    res.status(201).json(updatedOwner);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = updateOwner;
