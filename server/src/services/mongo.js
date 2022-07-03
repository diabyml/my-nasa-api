const mongoose = require("mongoose");

require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL;

// const MONGO_URL =
//   "mongodb+srv://nasa-api:5XPA8wkA1FBVsxqv@nasa-api.9kgpkne.mongodb.net/nasa?retryWrites=true&w=majority";

// eventEmitter
mongoose.connection.once("open", () => {
  console.log(`MongoDB connection ready`);
});

mongoose.connection.on("error", (error) => {
  console.error(`MongoDB error: ${error}`);
});

function mongoConnect() {
  mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = { mongoConnect, mongoDisconnect };
