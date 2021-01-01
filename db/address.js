const mongoose = require("mongoose");
const { Schema } = mongoose;

const ObjectId = Schema.Types.ObjectId;
const addressSchema = new Schema({
  city: { type: String, required: true },
  street: { type: String, required: true },
  building: { type: String, required: true },
  apartment: { type: String, required: true },
  specificAddress: { type: String, required: false },
  longitude: { type: String, required: false },
  latitude: { type: String, required: false },
});

const Address = mongoose.model("Address", addressSchema);

module.exports = addressSchema;
