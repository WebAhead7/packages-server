const express = require("express");
const router = express.Router();

const getBusinessMiddleware = require("../handlers/business/getBusinessMiddleware");
const getBusiness = require("../handlers/business/getBusiness");
const addBusiness = require("../handlers/business/addBusiness");

router.get("/business/:id", getBusinessMiddleware, getBusiness);
router.post("/business", addBusiness);

module.exports = router;
