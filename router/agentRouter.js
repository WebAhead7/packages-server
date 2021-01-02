const express = require("express");
const router = express.Router();

const addAgent = require("../handlers/agent/addAgent");
const getAgent = require("../handlers/agent/getAgent");
const getAgentMiddleware = require("../handlers/agent/getAgentMiddleware");
const updateAgent = require("../handlers/agent/updateAgent");
const loginAgent = require("../handlers/agent/loginAgent");
const getAgentByEmail = require("../handlers/agent/getAgentByEmail");
const signUpMiddleware = require("../handlers/agent/signUpMiddleware");
const authAgent = require("../handlers/agent/authAgent");
const addPackageIdToAgent = require("../handlers/agent/addPackageIdToAgent");
const updatePackageStatus = require("../handlers/package/updatePackageStatus");
const getAllAgent = require("../handlers/agent/getAllAgent");

const getOnePackageNext = require("../handlers/package/getOnePackageNext");
const confirmOwner = require("../handlers/mail/confirmOwner");
const confirmClient = require("../handlers/mail/confirmClient");
const confirmDelivery = require("../handlers/mail/confirmDelivery");

const confirmPickup = require("../handlers/agent/confirmPickup");
const confirmDeliver = require("../handlers/agent/confirmDeliver");

const getClientMiddleware = require("../handlers/client/getClientMiddleware");
const getOneClient = require("../handlers/client/getOneClient");
const addClientToPackage = require("../handlers/client/addClientToPackage");

router.get("/agent/:id", authAgent, getAgentMiddleware, getAgent);
router.put("/agent/:id", authAgent, updateAgent);

router.get("/agent", getAllAgent, getAgent);

router.post("/agent/login", getAgentByEmail, loginAgent);
router.post("/agent/signup", getAgentByEmail, signUpMiddleware, addAgent);

router.post(
  "/agent/request_package/:businessId/:packageId",
  authAgent,
  getOnePackageNext,
  addPackageIdToAgent,
  updatePackageStatus,
  confirmOwner
);

router.post(
  "/agent/confirm_pickup/:businessId/:packageId",
  authAgent,
  getOnePackageNext,
  confirmPickup,
  updatePackageStatus,
  addClientToPackage,
  confirmClient
);

router.post(
  "/agent/confirm_delivery/:businessId/:packageId",
  authAgent,
  getOnePackageNext,
  confirmDeliver,
  updatePackageStatus,
  confirmDelivery
);

module.exports = router;
