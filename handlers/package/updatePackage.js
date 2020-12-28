const { Business } = require("../../db/db");

const updatePackage = async (req, res, next) => {
  const packageId = req.params.packageId;
  const businessId = req.params.businessId;

  const package = {
    name: req.body.name,
    mid: req.body.mid,
    weight: req.body.weight,
    delivery_price: req.body.delivery_price,
    quantity: req.body.quantity,
    status: req.body.status || "Pending",
    track_number: req.body.track_number,
    clientId: req.body.clientId,
    agentId: req.body.agentId || "Pending",
  };

  try {
    await Business.findOneAndUpdate(
      { "items._id": `${packageId}` },
      {
        $set: {
          "items.$.name": package.name,
          "items.$.mid": package.mid,
          "items.$.weight": package.weight,
          "items.$.delivery_price": package.delivery_price,
          "items.$.quantity": package.quantity,
          "items.$.status": package.status,
          "items.$.track_number": package.track_number,
          "items.$.clientId": package.clientId,
          "items.$.agentId": package.agentId,
        },
      }
    );

    res.status(201).json({ message: "Package updated successfuly" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = updatePackage;
