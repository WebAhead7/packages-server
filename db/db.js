const mongoose = require("mongoose");
const express = require("express");
const app = express();

const { Schema } = mongoose;

const AddressSchema = new Schema({
  city: { type: String, required: true },
  street: { type: String, required: true },
  building: { type: String, required: true },
  apartment: { type: String, required: true },
  specificAddress: { type: String, required: true },
  longitude: { type: String, required: true },
  latitude: { type: String, required: true },
});

const PaymentSchema = new Schema(
  {
    creditNo: { type: Number, min: 16, required: true },
    expDate: { type: String, required: true },
    cvv: { type: Number, min: 3, required: true },
  },
  { timestamps: true }
);

const BankSchema = new Schema({
  bank_name: { type: String, required: true },
  bank_no: { type: Number, required: true },
  account_no: { type: String, required: true },
});

const HoursSchema = new Schema({
  day: { type: String, required: true },
  open: { type: String, required: true },
  close: { type: String, required: true },
});

const PackageSchema = new Schema(
  {
    name: { type: String, required: true },
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
  },
  { timestamps: true }
);

const ClientSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    id: { type: Number, required: true },
    address: { type: AddressSchema, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

const businessSchema = new Schema({
  name: { type: String, required: true },
  storeId: { type: String, required: true },
  category: { type: [String], required: true },
  items: { type: [PackageSchema] },
  clients: { type: [ClientSchema] },
  phone: { type: Number, required: true },
  fax: { type: Number, required: true },
  email: { type: String, required: true },
  about: { type: String, required: true },
  address: { type: AddressSchema, required: true },
  // hours: { type: Hours, required: true },
});

const agentSchema = new Schema(
  {
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
    Bank: { type: BankSchema, required: true },
    monthly_paychecks: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const shopOwnerSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: Number, min: 10 },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: Number, min: 8 },
    idImage: { type: String, required: true },
    businessId: { type: Number, min: 8, required: true },
    address: { type: AddressSchema, required: true },
    payment: { type: PaymentSchema, required: true },
  },
  { timestamps: true }
);

const Business = mongoose.model("Business", businessSchema);
const Package = mongoose.model("Package", PackageSchema);
const Agent = mongoose.model("Agent", agentSchema);
const Shopowner = mongoose.model("Owner", shopOwnerSchema);

module.exports = { Shopowner, Agent, Business, Package };


