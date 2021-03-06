const mongoose = require("mongoose");
const { Schema } = mongoose;

const ObjectId = Schema.Types.ObjectId;

const bankSchema = new Schema({
  id_num: { type: Number, required: false },
  bank_name: { type: String, required: true },
  bank_no: { type: Number, required: true },
  account_no: { type: String, required: true },
});

// const Bank = mongoose.model("Bank", bankSchema);

module.exports = bankSchema;
