const { Business } = require("../../db/db");

const updateClient = async (req, res, next) => {
  const clientId = req.params.clientId;
  const businessId = req.params.businessId;

  const package = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
  };

  try {
    await Business.findOneAndUpdate(
      { _id: `${businessId}`, "clients._id": `${clientId}` },
      {
        $set: {
          "items.$.firstname": package.firstname,
          "items.$.lastname": package.lastname,
          "items.$.address": package.address,
          "items.$.phone": package.phone,
          "items.$.email": package.email,
        },
      }
    );

    return res.status(201).json({ message: "Client updated successfuly" });
  } catch (err) {
    return next(err);
  }
};

module.exports = updateClient;
