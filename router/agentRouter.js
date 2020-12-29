const express = require("express");
const router = express.Router();

const addAgent = require("../handlers/agent/addAgent");
const getAgent = require("../handlers/agent/getAgent");
const getAgentMiddleware = require("../handlers/agent/getAgentMiddleware");
const updateAgent = require("../handlers/agent/updateAgent");

router.get("/agent/:id", getAgentMiddleware, getAgent);
router.post("/agent", addAgent);
router.patch("/agent/:id", updateAgent);

module.exports = router;
