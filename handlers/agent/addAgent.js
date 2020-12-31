const { Agent } = require("../../db/db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const addAgent = async (req, res, next) => {
  console.log("sssss");

  const agent = new Agent({
    first_name: req.body.firstname,
    last_name: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    // address: req.body.address,
    // items: req.body.items,
    // vehicle_type: req.body.vehicle_type,
    // vehicle_no: req.body.vehicle_no,
    // id_num: req.body.id_num,
    // licenseId: req.body.licenseId,
    // licenseImage: req.body.licenseImage,
    // licenseDate: req.body.licenseDate,
    // rating: req.body.rating,
    // Bank: req.body.Bank,
    // monthly_paychec: req.body.monthly_paychec,
  });

  try {
    const newAgent = await agent.save();
    const token = jwt.sign({ agent: newAgent }, process.env.SECRET);

    res.status(201).json({ agent: newAgent, accessToken: token });
  } catch (err) {
    err.status = 400;
    return next(err);
  }
};

module.exports = addAgent;
