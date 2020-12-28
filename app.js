require("dotenv").config();
const express = require("express");
const app = express();
const moongose = require("mongoose");
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const getBusiness = require("./handlers/test");
const returnBusiness = require("./handlers/get");
const addBusiness = require("./handlers/post");

moongose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = moongose.connection;

db.on("error", () => console.log(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

app.get("/business/:id", getBusiness, returnBusiness);
app.post("/business", addBusiness);

app.listen(PORT, () => console.log(`Server started`));
