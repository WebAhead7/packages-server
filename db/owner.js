const mongoose = require("mongoose");
const { Schema } = mongoose;
const addressSchema = require("./address");
const paymentSchema = require("./payment");

const ObjectId = Schema.Types.ObjectId;

const ownerSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: Number, min: 10 },
    mobile: { type: Number, min: 10 },
    email: { type: String, required: true },
    password: { type: String, required: true },
    idImage: { type: String, required: true },
    role: { type: String, default: "owner" },
    businessId: { type: String, required: false },
    idNumber: { type: String, required: true },
    address: { type: addressSchema, required: true },
    payment: { type: paymentSchema, required: true },
  },
  { timestamps: true }
);

const Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;
