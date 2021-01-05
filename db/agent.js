const mongoose = require("mongoose");
const { Schema } = mongoose;

const ObjectId = Schema.Types.ObjectId;
const bankSchema = require("./bank");
const addressSchema = require("./address");

const agentSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    role: { type: String, default: "agent" },
    email: { type: String, required: true },
    password: { type: String, required: true },
    // confirm: { type: String, required: true },
    // phone: { type: Number, required: true },
    // vehicle_type: { type: String, required: false },
    // vehicle_no: { type: Number, required: false },
    // id_num: { type: Number, required: false },
    // licenseId: { type: Number, required: false },
    // licenseImage: { type: String, required: false },
    // licenseDate: { type: Date, required: false },
    // rating: { type: Number, default: 5 },
    // bank: { type: bankSchema, required: false },
    // monthly_paychecks: { type: Boolean, required: false },
    items: { type: [String] },
    // address: { type: addressSchema, required: false },
  },
  { timestamps: true }
);

const Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent;
