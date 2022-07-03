const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const v1Router = require("./routes/api");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());

// version 1 router
app.use("/v1", v1Router);

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
