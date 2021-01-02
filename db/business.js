const mongoose = require("mongoose");
const { Schema } = mongoose;
const packageSchema = require("./package");
const addressSchema = require("./address");

const ObjectId = Schema.Types.ObjectId;

const businessSchema = new Schema({
  name: { type: String, required: true },
  storeId: { type: String, required: true },
  category: { type: [String], required: true },
  items: [{ type: ObjectId, ref: "Package" }],
  clients: [{ type: ObjectId, ref: "Client" }],
  phone: { type: Number, required: true },
  mobile: { type: Number, required: true },
  email: { type: String, required: true },
  about: { type: String, required: true },
  address: { type: addressSchema, required: true },
});

const Business = mongoose.model("Business", businessSchema);
module.exports = Business;
