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
const requestPackage = require("../handlers/agent/requestPackage");
const updatePackageStatus = require("../handlers/package/updatePackageStatus")
const updateAgentItems = require("../handlers/agent/updateAgentItems")
const getAllAgent = require("../handlers/agent/getAllAgent")


router.get("/agent/:id", authAgent, getAgentMiddleware, getAgent);
router.put("/agent/:id", authAgent, updateAgent);

router.get("/agent", getAllAgent, getAgent);

router.post("/agent/login", getAgentByEmail, loginAgent);
router.post("/agent/signup", getAgentByEmail, signUpMiddleware, addAgent);

router.get(
    "/agent/requestPackage/:packageId",
    authAgent,
    requestPackage,
    updatePackageStatus
);

router.get("/agent/package/:packageId", authAgent, updatePackageStatus, updateAgentItems);


module.exports = router;
