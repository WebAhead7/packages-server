const mongoose = require("mongoose");
const { Schema } = mongoose;

const ObjectId = Schema.Types.ObjectId;

const agentSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    role: { type: String, default: "agent" },
    email: { type: String, required: true },
    password: { type: String, required: true },
    // vehicle_type: { type: String, required: false },
    // vehicle_no: { type: Number, required: false },
    // id_num: { type: Number, required: false },
    // licenseId: { type: Number, required: false },
    // licenseImage: { type: String, required: false },
    // licenseDate: { type: Date, required: false },
    // rating: { type: Number, default: 5 },
    // Bank: { type: BankSchema, required: false },
    // monthly_paychecks: { type: Boolean, required: false },
    items: { type: [String] },
    // address: { type: AddressSchema, required: false },
    // vehicle_type: { type: String, required: true },
    // vehicle_no: { type: Number, required: true },
    // id_num: { type: Number, required: true },
    // licenseId: { type: Number, required: true },
    // licenseImage: { type: String, required: true },
    // licenseDate: { type: String, required: true },
    // rating: { type: Number, default: 5 },
    // Bank: { type: BankSchema, required: false },
    // monthly_paychecks: { type: Boolean, required: false },
  },
  { timestamps: true }
);

const Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent;
