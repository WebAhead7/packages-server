const express = require("express");
const router = express.Router();

const getBusinessPackages = require("../handlers/package/getBusinessPackages");
const getPackages = require("../handlers/package/getPackages");
const getOnePackage = require("../handlers/package/getOnePackage");
const getOnePackageNext = require("../handlers/package/getOnePackageNext");
const updatePackageStatus = require("../handlers/package/updatePackageStatus");
const getFilteredPackagesMiddleware = require("../handlers/package/getFilteredPackagesMiddleware");
const getFilteredPackages = require("../handlers/package/getFilterPackages");
const authOwner = require("../handlers/owner/authOwner");
const authAgent = require("../handlers/agent/authAgent");
const confirmOwner = require("../handlers/mail/confirmOwner");
const addPackage = require("../handlers/package/addPackage");
const updatePackage = require("../handlers/package/updatePackage");
const deletePackage = require("../handlers/package/deletePackage");
const getFilteredRadiusPackages = require("../handlers/package/getFilteredRadiusPackages");

router.get("/package", authOwner, getBusinessPackages);
router.get("/package/one/:packageId", authOwner, getOnePackage);

// router.get("/package/filtered_packages", getFilteredPackagesMiddleware, getFilteredPackages);

router.post(
  "/package/fr/:radious",
  authAgent,
  getFilteredPackagesMiddleware,
  getFilteredRadiusPackages,
  getFilteredPackages
);

router.post("/package/add", authOwner, addPackage);
router.put("/package/:packageId", authOwner, updatePackage);
router.put(
  "/package/status/:businessId/:packageId",
  authAgent,
  updatePackageStatus
);

router.delete("/package/:businessId/:packageId", authOwner, deletePackage);

module.exports = router;
