const Business = require("../../db/business");
const Package = require("../../db/package");

const addPackage = async (req, res, next) => {
  const businessId = res.owner.owner.businessId;
  let package;
  const savePackage = new Package({
    name: req.body.name,
    mid: req.body.mid,
    weight: req.body.weight,
    delivery_price: req.body.delivery_price,
    quantity: req.body.quantity,
    track_number: req.body.track_number,
    businessId: businessId,
    clientId: req.body.clientId,
    client: req.body.clientId,
    confirmation: `0125${req.body.mid}grdr${req.body.track_number}548675`,
    clientConfirmation: `0125${req.body.mid}XYZII${req.body.track_number}5212`,
    address: businessId,
  });

  try {
    package = await savePackage.save();

    if (!package) {
      const error = new Error("Check package details and try again!");
      error.status = 400;
      next(error);
    }

    await Business.findOneAndUpdate(
      { _id: businessId },
      {
        $addToSet: {
          items: package._id,
        },
      }
    );

    return res.status(201).json({ message: "Package added successfuly" });
  } catch (err) {
    console.log(err);
    err.status = 400;
    return next(err);
  }
};

module.exports = addPackage;
