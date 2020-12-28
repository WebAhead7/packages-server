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
  creditNo: { type: Number, min: 16, required: true },
  expDate: { type: String, required: true },
  cvv: { type: Number, min: 3, required: true },
});

const Bank = new Schema({
  bank_name: { type: String, required: true },
  bank_no: { type: Number, required: true },
  account_no: { type: String, required: true },
});

const package = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  id: { type: Number, required: true },
  mid: { type: String, required: true },
  weight: { type: Number, required: true },
  delivery_price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  status: { type: String, required: true },
  track_number: { type: String, required: true },
  businessId: { type: String, required: true },
  clientId: { type: String, required: true },
  agentId: { type: String, required: true },
});

const Client = new Schema({
  name: { type: String, required: true },
  id: { type: Number, required: true },
  address: { type: Address, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
});

const business = new Schema({
  storeId: { type: String, required: true },
  category: { type: [String], required: true },
  items: { type: [package] },
  clients: { type: [Client] },
  phone: { type: Number, required: true },
  fax: { type: Number, required: true },
  email: { type: String, required: true },
  about: { type: String, required: true },
  address: { type: Address, required: true },
});

const Business = mongoose.model("Business", business);

const agent = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  city: { type: String, required: true },
  vehicle_type: { type: String, required: true },
  vehicle_no: { type: Number, required: true },
  id_num: { type: Number, required: true },
  licenseId: { type: Number, required: true },
  licenseImage: { type: String, required: true },
  licenseDate: { type: Date, required: true },
  rating: { type: Number, required: true },
  Bank: { type: Bank, required: true },
  monthly_paychecks: { type: Boolean, required: true },
});

const Agent = mongoose.model("Agent", agent);

const shopOwner = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: Number, min: 10 },
  city: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number, min: 8 },
  idImage: { type: String, required: true },
  businessId: { type: Number, min: 8, required: true },
  address: { type: Address, required: true },
  payment: { type: Payment, required: true },
});

const Shopowner = mongoose.model("Owner", shopOwner);

module.exports = { Shopowner, Agent, Business };
