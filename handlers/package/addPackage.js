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

    res.status(201).json({ message: "Package added successfuly" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = addPackage;
