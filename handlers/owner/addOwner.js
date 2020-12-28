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
  
  firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: Number, min: 10 },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: Number, min: 8 },
    idImage: { type: String, required: true },
    businessId: { type: Number, min: 8, required: true },
    address: { type: AddressSchema, required: true },
    payment: { type: PaymentSchema, required: true },

  try {
    const newOwner = await owner.save();
    res.status(201).json(newOwner);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = addOwner;
