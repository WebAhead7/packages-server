const Business = require("../../db/business");

const addBusiness = async (req, res, next) => {
  let newBusiness;
  const business = new Business({
    name: req.body.name,
    storeId: req.body.storeId,
    category: req.body.category,
    items: req.body.items,
    clients: req.body.clients,
    phone: req.body.phone,
    mobile: req.body.mobile,
    email: req.body.email,
    about: req.body.about,
    address: req.body.address,
  });

  try {
    newBusiness = await business.save();
  } catch (err) {
    err.status = 400;
    return next(err);
  }
  res.business = newBusiness;
  return next();
};

module.exports = addBusiness;
