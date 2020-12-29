const { Business } = require("../../db/db");

const addBusiness = async (req, res, next) => {
  const business = new Business({
    name: req.body.name,
    storeId: req.body.storeId,
    category: req.body.category,
    items: req.body.items,
    clients: req.body.clients,
    phone: req.body.phone,
    fax: req.body.fax,
    email: req.body.email,
    about: req.body.about,
    address: req.body.address,
  });

  try {
    const newBusiness = await business.save();
    res.status(201).json(newBusiness);
  } catch (err) {
    err.status = 400;
    return next(err);
  }
};

module.exports = addBusiness;
