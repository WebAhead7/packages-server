const express = require("express");
const router = express.Router();

const getOwnerMiddleware = require("../handlers/owner/getOwnerMiddleware");
const getOwner = require("../handlers/owner/getOwner");
const addOwner = require("../handlers/owner/addOwner");
const updateOwner = require("../handlers/owner/updateOwner");
const loginOwner = require("../handlers/owner/loginOwner");
const getOwnerByEmail = require("../handlers/owner/getOwnerByEmail");

router.get("/owner/:id", getOwnerMiddleware, getOwner);
router.post("/owner", addOwner);
router.put("/owner/:id", updateOwner);

router.post("/owner/login", getOwnerByEmail, loginOwner);

module.exports = router;
