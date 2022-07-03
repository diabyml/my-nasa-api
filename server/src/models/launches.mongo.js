const mongoose = require("mongoose");

const launchesSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
  },
  launchDate: {
    type: Date,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  rocket: {
    type: String,
    required: true,
  },
  //   this is like sql foreign key, but mongo is not perfect for such things
  // we instead wanna include everything directly in our collection
  //   target: {
  //     type: mongoose.ObjectId,
  //     ref: "Planet",
  //   },
  target: {
    type: String,
    // required: true,
  },
  customers: [
    {
      type: String,
    },
  ],
  upcoming: {
    type: Boolean,
    required: true,
  },
  success: {
    type: Boolean,
    required: true,
    default: true,
  },
});

// define a model
// Luanch --> is the collectionName, mongo will set our collection name to "launches"
module.exports = mongoose.model("Launch", launchesSchema);
