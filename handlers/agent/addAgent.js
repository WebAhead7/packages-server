const Agent = require("../../db/agent");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const addAgent = async (req, res, next) => {
  console.log("HEREEEEEEEE");
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
    // licenseImage: req.body.licenseImage,
    // licenseDate: req.body.licenseDate,
    // rating: req.body.rating,
    // bank: req.body.bank,
    // monthly_paychec: req.body.monthly_paychec,
  });

  try {
    console.log("TRY TRY TRY TRY TRY");
    const newAgent = await agent.save();
    console.log(newAgent);
    const token = jwt.sign({ agent: newAgent }, process.env.SECRET);

    return res.status(201).json({ agent: newAgent, accessToken: token });
  } catch (err) {
    err.status = 401;
    return next(err);
  }
};

module.exports = addAgent;
