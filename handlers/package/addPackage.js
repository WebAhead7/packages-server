const Business = require("../../db/business");

const addPackage = async (req, res, next) => {
  const businessId = res.owner.owner.businessId;

  console.log(businessId);
  const package = {
    name: req.body.name,
    mid: req.body.mid,
    weight: req.body.weight,
    delivery_price: req.body.delivery_price,
    quantity: req.body.quantity,
    track_number: req.body.track_number,
    businessId: businessId,
    clientId: req.body.clientId,
    confirmation: `0125${req.body.mid}grdr${req.body.track_number}548675`,
    clientConfirmation: `0125${req.body.mid}XYZII${req.body.track_number}5212`,
    address: req.body.address,
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
