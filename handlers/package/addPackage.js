const { Business } = require("../../db/db");

const addPackage = async (req, res, next) => {
  const businessId = req.params.businessId;

  const package = {
    name: req.body.name,
    mid: req.body.mid,
    weight: req.body.weight,
    delivery_price: req.body.delivery_price,
    quantity: req.body.quantity,
    status: req.body.status,
    track_number: req.body.track_number,
    businessId: req.body.businessId,
    clientId: req.body.clientId,
    agentId: req.body.agentId,
    confirmation: `0125${req.body.mid}grdr${req.body.track_number}548675`,
    storeAddress: req.body.address,
  };

  try {
    await Business.findOneAndUpdate(
      { _id: businessId },
      {
        $push: {
          items: package,
        },
      }
    );

    return res.status(201).json({ message: "Package added successfuly" });
  } catch (err) {
    err.status = 400;
    return next(err);
  }
};

module.exports = addPackage;
