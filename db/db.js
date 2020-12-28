const mongoose = require("mongoose");
const express = require("express");
const app = express();

const { Schema } = mongoose;

const package = new Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    id: { type: Number, required: true },
    mid: { type: String, required: true },
    weight: { type: Number, required: true },
    delivery_price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    status: { type: String, required: true },
    track_number: { type: Number, required: true },
    Business: { type: String, required: true },
    USER: { type: String, required: true },
    AGENT: { type: String, required: true }
})

const Client = new Schema({
    name: { type: String, required: true },
    id: { type: Number, required: true },
    address: { type: Address, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true }
})

const bank = new Schema({
    bank_name: { type: String, required: true },
    bank_no: { type: Number, required: true },
    account_no: { type: String, required: true }
})

const Bank = mongoose.model("Bank", bank);


const Agent = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    city: { type: String, required: true },
    vehicle_type: { type: String, required: true },
    vehicle_no: { type: Number, required: true },
    id_num: { type: Nunber, required: true },
    licenseId: { type: Number, required: true },
    licenseImage: { type: Image, required: true },
    licenseDate: { type: Date, required: true },
    rating: { type: Number, required: true },
    Bank: { type: Number, required: true },
    monthly_paychecks: { type: Boolean, required: true }
})










