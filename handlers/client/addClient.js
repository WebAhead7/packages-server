const Client = require("../../db/Client");
const addClient = async (req, res, next) => {
  const owner = res.owner.owner;
  const businessId = owner.businessId;
  let client;
  const saveClient = new Client({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
    businessId: businessId,
  });

  try {
    client = await saveClient.save();
  } catch (err) {
    err.status = 400;
    return next(err);
  }

  res.client = client;
  next();
};

module.exports = addClient;
