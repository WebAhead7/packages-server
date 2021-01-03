const mongoose = require("mongoose");
const { Schema } = mongoose;

const ObjectId = Schema.Types.ObjectId;

const paymentSchema = new Schema(
  {
    creditNo: { type: Number, min: 16, required: true },
    idNumber: { type: Number, min: 9, required: true },
    expDate: { type: String, required: true },
    cvv: { type: Number, min: 3, required: true },
  },
  { timestamps: true }
);

// const Payment = mongoose.model("Payment", paymentSchema);

module.exports = paymentSchema;
