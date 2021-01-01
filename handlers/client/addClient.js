const Business = require("../../db/business");
const addClient = async (req, res, next) => {
  const owner = res.owner.owner;
  const businessId = owner.businessId;

  console.log(owner);

  const client = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
  };

  try {
    await Business.findOneAndUpdate(
      { _id: businessId },
      {
        $push: {
          clients: client,
        },
      }
    );

    res.status(201).json({ message: "Client added successfuly" });
  } catch (err) {
    err.status = 400;
    return next(err);
  }
};

module.exports = addClient;
