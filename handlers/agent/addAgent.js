const { Agent } = require("../../db/db");

const addAgent = async (req, res, next) => {
  const agent = new Agent({
    first_name: req.body.firstname,
    last_name: req.body.lastname,
    email: req.body.email,
    city: req.body.city,
    vehicle_type: req.body.vehicle_type,
    vehicle_no: req.body.vehicle_no,
    id_num: req.body.id_num,
    licenseId: req.body.licenseId,
    licenseImage: req.body.licenseImage,
    licenseDate: req.body.licenseDate,
    rating: req.body.rating,
    Bank: req.body.Bank,
    monthly_paychec: req.body.monthly_paychec,
  });

  try {
    const newAgent = await agent.save();
    res.status(201).json(newAgent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = addAgent;
