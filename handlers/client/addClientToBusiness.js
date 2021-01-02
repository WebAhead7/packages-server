const Business = require("../../db/business");

const addClientToBusiness = async (req, res, next) => {
  const owner = res.owner.owner;
  const clientId = res.client._id;
  const businessId = owner.businessId;

  try {
    await Business.findOneAndUpdate(
      { _id: businessId },
      { $addToSet: { clients: clientId } }
    );
  } catch (err) {
    err.status = 400;
    return next(err);
  }

  return res
    .status(201)
    .json({ message: "Client added successfuly", client: res.client });
};

module.exports = addClientToBusiness;
