const mongoose = require("mongoose");
const { Schema } = mongoose;
const addressSchema = require("./address");
const ObjectId = Schema.Types.ObjectId;

const clientSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    address: { type: addressSchema, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    agentId: { type: String, default: "Pending" },
    businessId: { type: String, required: true },
  },
  { timestamps: true }
);
const Client = mongoose.model("Client", clientSchema);
module.exports = Client;
