const express = require("express");
const router = express.Router();

const getPackageMiddleware = require("../handlers/package/getPackageMiddleware");
const getPackages = require("../handlers/package/getPackages");
const getOnePackage = require("../handlers/package/getOnePackage");
const updatePackageStatus = require("../handlers/package/updatePackageStatus");

const addPackage = require("../handlers/package/addPackage");
const updatePackage = require("../handlers/package/updatePackage");
const deletePackage = require("../handlers/package/deletePackage");

router.get("/package/:id", getPackageMiddleware, getPackages);
router.get("/package/:id/:packageId", getPackageMiddleware, getOnePackage);

router.post("/package/:businessId", addPackage);
router.put("/package/:businessId/:packageId", updatePackage);
router.put("/package/status/:businessId/:packageId", updatePackageStatus);

router.delete("/package/:businessId/:packageId", deletePackage);

module.exports = router;
