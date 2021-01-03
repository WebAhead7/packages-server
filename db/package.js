const mongoose = require("mongoose");
const { Schema } = mongoose;

const Business = require("./business");
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
    client: { type: ObjectId, ref: "Client" },
    agentId: { type: ObjectId, ref: "Agent" },
    confirmation: { type: String, required: true },
    clientConfirmation: { type: String, require: true },
    address: { type: ObjectId, ref: "Business" },
  },
  { timestamps: true }
);

const Package = mongoose.model("Package", packageSchema);
module.exports = Package;
