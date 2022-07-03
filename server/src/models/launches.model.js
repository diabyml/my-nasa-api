const axios = require("axios");

const launchesDatabase = require("./launches.mongo");
const planets = require("./planets.mongo");

const DEFAULT_FLIGHT_NUMBER = 100;

// const launches = new Map();

// let latestFlightNumber = 100;

// const launch = {
//   flightNumber: 100,
//   mission: "Kepler Exploration X",
//   rocket: "Explorer IS1",
//   launchDate: new Date("December 27, 2030"),
//   target: "Kepler-442 b",
//   customers: ["NASA", "ZTM"],
//   upcoming: true,
//   success: true,
// };

// testing saveLaunch
// saveLaunch(launch);

// launches.set(launch.flightNumber, launch);

const SPACEX_API_URL = "https://api.spacexdata.com/v4/launches/query";

async function populateLaunches() {
  const response = await axios.post(SPACEX_API_URL, {
    query: {},
    options: {
      pagination: false,
      populate: [
        {
          path: "rocket",
          select: {
            name: 1,
          },
        },
        {
          path: "payloads",
          select: {
            customers: 1,
          },
        },
      ],
    },
  });

  if (response.status !== 200) {
    console.log(`Problem downloading spacex data`);
    throw new Error("Launch data download failed");
  }

  const launchDocs = response.data.docs;
  for (const launchDoc of launchDocs) {
    const payloads = launchDoc["payloads"];

    const customers = payloads.flatMap((payload) => payload["customers"]);

    const launch = {
      flightNumber: launchDoc["flight_number"],
      mission: launchDoc["name"],
      rocket: launchDoc["rocket"]["name"],
      launchDate: launchDoc["date_local"],
      success: launchDoc["success"],
      upcoming: launchDoc["upcoming"],
      customers: customers,
    };

    // console.log(`${launch.flightNumber}: ${launch.mission}`);
    // populate launches collection
    await saveLaunch(launch);
  }
}

async function loadSpacexLaunchesData() {
  console.log(`Downloading launches data from spacex api...`);
  const firstLaunch = await findLaunch({
    flightNumber: 1,
    rocket: "Falcon 1",
    mission: "FalconSat",
  });

  if (firstLaunch) {
    console.log(`Launch data already loaded`);
    return;
  } else {
    await populateLaunches();
  }
}

async function findLaunch(filter) {
  return await launchesDatabase.findOne(filter);
}

async function existsLaunchWithId(launchId) {
  return await findLaunch({ flightNumber: launchId });
}

async function getLatestFlightNumber() {
  const latestLaunch = await launchesDatabase.findOne().sort("-flightNumber");

  if (!latestLaunch) {
    return DEFAULT_FLIGHT_NUMBER;
  }

  return latestLaunch.flightNumber;
}

async function getAllLaunches(skip, limit) {
  return await launchesDatabase
    .find({}, { _id: 0, __v: 0 })
    .sort("flightNumber")
    .skip(skip)
    .limit(limit);
}

async function saveLaunch(launch) {
  return await launchesDatabase.updateOne(
    { flightNumber: launch.flightNumber },
    launch,
    {
      upsert: true,
    }
  );
}

async function scheduleNewLaunch(launch) {
  const planet = await planets.findOne(
    { kepler_name: launch.target },
    { _id: 0, __v: 0 }
  );

  if (!planet) {
    throw new Error("No matching planet found");
  }

  const newLaunch = {
    ...launch,
    success: true,
    upcoming: true,
    customers: ["Zero toMastery", "NASA"],
    flightNumber: (await getLatestFlightNumber()) + 1,
  };

  return await saveLaunch(newLaunch);
}

async function abortLaunchById(launchId) {
  const aborted = await launchesDatabase.updateOne(
    { flightNumber: launchId },
    { success: false, upcoming: false }
  );
  console.log("aborted:", aborted);
  return aborted.matchedCount === 1 && aborted.modifiedCount === 1;
}

module.exports = {
  getAllLaunches,
  existsLaunchWithId,
  abortLaunchById,
  scheduleNewLaunch,
  loadSpacexLaunchesData,
};
