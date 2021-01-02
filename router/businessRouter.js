const express = require("express");
const router = express.Router();

const getBusinessMiddleware = require("../handlers/business/getBusinessMiddleware");
const getBusiness = require("../handlers/business/getBusiness");
const addBusiness = require("../handlers/business/addBusiness");
const addClient = require("../handlers/client/addClient");
const authOwner = require("../handlers/owner/authOwner");
const addClientToBusiness = require("../handlers/client/addClientToBusiness");
const addBusinessIdToOwner = require("../handlers/owner/addBusinessIdToOwner");

router.get("/business/:id", getBusinessMiddleware, getBusiness);
router.post("/business", authOwner, addBusiness, addBusinessIdToOwner);

router.post("/business/addclient", authOwner, addClient, addClientToBusiness);

module.exports = router;
