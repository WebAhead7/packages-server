require("dotenv").config();
const express = require("express");
const app = express();
const moongose = require("mongoose");
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const getBusinessMiddleware = require("./handlers/business/getBusinessMiddleware");
const getPackageMiddleware = require("./handlers/package/getPackageMiddleware");
const returnBusiness = require("./handlers/business/getBusiness");
const returnPackage = require("./handlers/package/getPackage");
const addBusiness = require("./handlers/business/addBusiness");
const addPackage = require("./handlers/package/addPackage");
const updatePackage = require("./handlers/package/updatePackage");

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

// app.get("/owner/:id", getBusinessMiddleware, returnBusiness);
// app.post("/owner", addOwner);

app.get("/package/:id", getPackageMiddleware, returnPackage);
app.post("/package", addPackage);
app.put("/package", updatePackage)

app.listen(PORT, () => console.log(`Server started`));
