const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, { useNewUrlParser: true }, () =>
  console.log("database connected")
);

// body passer
app.use(express.json());
// pass cors
app.use(cors());
app.use("/app", routesUrls);
app.listen(5000, () => {
  console.log("Server is up and running :)");
});
