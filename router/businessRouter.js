const express = require("express");
const router = express.Router();

const getBusinessMiddleware = require("../handlers/business/getBusinessMiddleware");
const getBusiness = require("../handlers/business/getBusiness");
const addBusiness = require("../handlers/business/addBusiness");
const addClient = require("../handlers/client/addClient");
const authOwner = require("../handlers/owner/authOwner");

router.get("/business/:id", getBusinessMiddleware, getBusiness);
router.post("/business", addBusiness);
router.post("/business/add_client", authOwner, addClient);

module.exports = router;
