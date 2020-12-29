const express = require("express");
const router = express.Router();

const getPackageMiddleware = require("../handlers/package/getPackageMiddleware");
const getPackage = require("../handlers/package/getPackage");
const addPackage = require("../handlers/package/addPackage");
const updatePackage = require("../handlers/package/updatePackage");
const deletePackage = require("../handlers/package/deletePackage");

router.get("/package/:id", getPackageMiddleware, getPackage);
router.post("/package/:businessId", addPackage);
router.put("/package/:businessId/:packageId", updatePackage);
router.delete("/package/:businessId/:packageId", deletePackage);

module.exports = router;
