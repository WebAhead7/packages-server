require("dotenv").config();
const express = require("express");
const app = express();
const moongose = require("mongoose");
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const getBusinessMiddleware = require("./handlers/business/getBusinessMiddleware");
const getBusiness = require("./handlers/business/getBusiness");
const getPackageMiddleware = require("./handlers/package/getPackageMiddleware");
const getPackage = require("./handlers/package/getPackage");
const addBusiness = require("./handlers/business/addBusiness");

const addAgent = require("./handlers/agent/addAgent");
const getAgent = require("./handlers/agent/getAgent");
const getAgentMiddleware = require("./handlers/agent/getAgentMiddleware");
const updateAgent = require("./handlers/agent/updateAgent");

const addPackage = require("./handlers/package/addPackage");
const updatePackage = require("./handlers/package/updatePackage");
const deletePackage = require("./handlers/package/deletePackage");

const getOwnerMiddleware = require("./handlers/owner/getOwnerMiddleware");
const getOwner = require("./handlers/owner/getOwner");
const addOwner = require("./handlers/owner/addOwner");
const updateOwner = require("./handlers/owner/updateOwner");
const badRequest = require("./handlers/error/badRequest");
const errorHandler = require("./handlers/error/errorHandler");

moongose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const db = moongose.connection;

db.on("error", () => console.log(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

app.get("/business/:id", getBusinessMiddleware, getBusiness);
app.post("/business", addBusiness);

app.get("/owner/:id", getOwnerMiddleware, getOwner);
app.post("/owner", addOwner);
app.put("/owner/:id", updateOwner);

app.get("/package/:id", getPackageMiddleware, getPackage);
app.post("/package/:businessId", addPackage);
app.put("/package/:businessId/:packageId", updatePackage);
app.delete("/package/:businessId/:packageId", deletePackage);

app.get("/agent/:id", getAgentMiddleware, getAgent);
app.post("/agent", addAgent);
app.patch("/agent/:id", updateAgent);

app.use(badRequest);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started`));
