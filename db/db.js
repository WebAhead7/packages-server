const mongoose = require("mongoose");
const express = require("express");
const app = express();

const { Schema } = mongoose;

const Business = new Schema({
  storeId: { type: String, required: true },
  category: { type: [String], required: true },
  items: { type: [Item] },
  clients: { type: [Client] },
  phone: { type: Number, required: true },
  fax: { type: Number, required: true },
  email: { type: String, required: true },
  about: { type: String, required: true },
  address: { type: Address, required: true },
});
