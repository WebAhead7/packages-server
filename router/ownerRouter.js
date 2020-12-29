const express = require("express");
const router = express.Router();

const getOwnerMiddleware = require("../handlers/owner/getOwnerMiddleware");
const getOwner = require("../handlers/owner/getOwner");
const addOwner = require("../handlers/owner/addOwner");
const updateOwner = require("../handlers/owner/updateOwner");

router.get("/owner/:id", getOwnerMiddleware, getOwner);
router.post("/owner", addOwner);
router.put("/owner/:id", updateOwner);

module.exports = router;
