const mongoose = require("mongoose");
const express = require("express");
const app = express();

const { Schema } = mongoose;

const AddressSchema = new Schema({
  city: { type: String, required: true },
  street: { type: String, required: true },
  building: { type: String, required: true },
  apartment: { type: String, required: true },
  specificAddress: { type: String, required: false },
  longitude: { type: String, required: false },
  latitude: { type: String, required: false },
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
    mid: { type: String, required: true },
    weight: { type: Number, required: true },
    delivery_price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    status: { type: String, default: "Pending" },
    track_number: { type: String, required: true },
    businessId: { type: String, required: true },
    clientId: { type: String, required: true },
    agentId: { type: String, required: true },
    confirmation: { type: String, required: true },
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
    agentId: { type: String, default: "Pending" },
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
});

const agentSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    role: { type: String, default: "agent" },
    email: { type: String, required: true },
    password: { type: String, required: true },
    city: { type: String, required: false },
    vehicle_type: { type: String, required: false },
    vehicle_no: { type: Number, required: false },
    id_num: { type: Number, required: false },
    licenseId: { type: Number, required: false },
    licenseImage: { type: String, required: false },
    licenseDate: { type: Date, required: false },
    rating: { type: Number, default: 5 },
    Bank: { type: BankSchema, required: false },
    monthly_paychecks: { type: Boolean, required: false },
    items: { type: [String] },
    // address: { type: AddressSchema, required: false },
    vehicle_type: { type: String, required: true },
    vehicle_no: { type: Number, required: true },
    id_num: { type: Number, required: true },
    licenseId: { type: Number, required: true },
    // licenseImage: { type: String, required: true },
    // licenseDate: { type: String, required: true },
    // rating: { type: Number, default: 5 },
    // Bank: { type: BankSchema, required: false },
    // monthly_paychecks: { type: Boolean, required: false },
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
    role: { type: String, default: "owner" },
    businessId: { type: Number, min: 8, required: true },
    address: { type: AddressSchema, required: true },
    payment: { type: PaymentSchema, required: true },
  },
  { timestamps: true }
);

const refreshTokenSchema = new Schema(
  {
    userId: { type: String, required: true },
    refreshTokens: { type: [String] },
  },
  { timestamps: true }
);

const Business = mongoose.model("Business", businessSchema);
const Agent = mongoose.model("Agent", agentSchema);
const Owner = mongoose.model("Owner", shopOwnerSchema);
const Package = mongoose.model("Package", PackageSchema);
const RefreshToken = mongoose.model("RefreshToken", refreshTokenSchema);

module.exports = { Owner, Agent, Business, Package };
