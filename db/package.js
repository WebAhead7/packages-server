const mongoose = require("mongoose");
const { Schema } = mongoose;
// const Address = require("./address");
const addressSchema = require("./address");
const ObjectId = Schema.Types.ObjectId;

const packageSchema = new Schema(
  {
    name: { type: String, required: true },
    mid: { type: String, required: true },
    weight: { type: Number, required: true },
    delivery_price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    status: { type: String, default: "Pending" },
    track_number: { type: String, required: true },
    businessId: { type: String, required: true },
    clientId: { type: String, required: true },
    agentId: { type: String, default: "Pending" },
    confirmation: { type: String, required: true },
    clientConfirmation: { type: String, require: true },
    address: { type: addressSchema, required: true },
  },
  { timestamps: true }
);

const Package = mongoose.model("Package", packageSchema);
module.exports = packageSchema;
