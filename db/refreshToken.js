const mongoose = require("mongoose");
const { Schema } = mongoose;

const ObjectId = Schema.Types.ObjectId;

const refreshTokenSchema = new Schema(
  {
    userId: { type: String, required: true },
    refreshTokens: { type: [String] },
  },
  { timestamps: true }
);

const RefreshToken = mongoose.model("RefreshToken", refreshTokenSchema);

module.exports = RefreshToken;
