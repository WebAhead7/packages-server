require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const moongose = require("mongoose");
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

const badRequest = require("./handlers/error/badRequest");
const errorHandler = require("./handlers/error/errorHandler");

const agentRouter = require("./router/agentRouter");
const ownerRouter = require("./router/ownerRouter");
const packageRouter = require("./router/packageRouter");
const businessRouter = require("./router/businessRouter");

moongose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const db = moongose.connection;

db.on("error", () => console.log(error));
db.once("open", () => console.log("Connected to Database"));

app.use(cors());
app.use(express.json());

app.all(/agent/, agentRouter);
app.all(/owner/, ownerRouter);
app.all(/package/, packageRouter);
app.all(/business/, businessRouter);

app.use(badRequest);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started`));
