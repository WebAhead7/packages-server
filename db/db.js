const mongoose = require("mongoose");
const express = require("express");
const app = express();

const { Schema } = mongoose;

const Address = new Schema({
  city: { type: String, required: true },
  street: { type: String, required: true },
  building: { type: String, required: true },
  apartment: { type: String, required: true },
  specificAddress: { type: String, required: true },
  longitude: { type: String, required: true },
  latitude: { type: String, required: true },
});

const Payment = new Schema({
  creditNo: { type: Number, min: 16, required: true, index: true },
  expDate: { type: String, required: true },
  cvv: { type: Number, min: 3, required: true, index: true },
});

const shopOwner = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: Number, min: 10, index: true },
  city: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number, min: 8, index: true },
  idImage: { type: String, required: true },
  businessId: { type: Number, min: 8, index: true, required: true },
  address: { type: Address, required: true },
  payment: { type: Payment, required: true },
});

const Shopowner = mongoose.model("Owner", shopOwner);

module.exports = { Shopowner };
