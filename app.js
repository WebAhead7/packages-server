require("dotenv").config();
const express = require("express");
const app = express();
const moongose = require("mongoose");
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const getBusinessMiddleware = require("./handlers/business/getBusinessMiddleware");
const returnBusiness = require("./handlers/business/getBusiness");
const addBusiness = require("./handlers/business/addBusiness");
const addAgent = require("./handlers/agent/addAgent");
const getAgent = require("./handlers/agent/getAgent");
const getAgentMiddleware = require("./handlers/agent/getAgentMiddleware");
const updateAgent = require("./handlers/agent/updateAgent");

moongose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = moongose.connection;

db.on("error", () => console.log(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

app.get("/business/:id", getBusinessMiddleware, returnBusiness);
app.post("/business", addBusiness);

app.get("/owner/:id", getBusinessMiddleware, returnBusiness);
app.post("/owner", addBusiness);

app.get("/agent/:id", getAgentMiddleware, getAgent);
app.post("/agent", addAgent);
app.patch("/agent/:id", updateAgent);

app.listen(PORT, () => console.log(`Server started`));
