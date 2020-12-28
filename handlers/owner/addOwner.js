const { Owner } = require("../../db/db");

const addOwner = async (req, res, next) => {
  const owner = new Owner({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
    idImage: req.body.idImage,
    businessId: req.body.businessId,
    payment: req.body.payment,
  });

  try {
    const newOwner = await owner.save();
    res.status(201).json(newOwner);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = addOwner;
