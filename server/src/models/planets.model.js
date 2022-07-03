const fs = require("fs");
const { parse } = require("csv-parse");
const path = require("path");

const planets = require("./planets.mongo");

const isHabitablePlanet = (planet) => {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
};

function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, "..", "..", "data", "data.csv"))
      .pipe(parse({ columns: true, comment: "#" }))
      .on("data", async (planet) => {
        if (isHabitablePlanet(planet)) {
          savePlanet(planet);
        }
      })
      .on("error", (error) => {
        reject(error);
        console.log(error);
      })
      .on("end", async () => {
        resolve();
        const countPlanetsFound = (await getAllPlanets()).length;
        console.log(`Found ${countPlanetsFound} planets.`);
      });
  });
}

async function getAllPlanets() {
  return await planets.find({});
}

async function savePlanet(planet) {
  // insert and update in mongo --> upsert
  // TODO: replace below create with upsert
  // the arg to updateOne is the filter and the second is the data for update
  try {
    await planets.updateOne(
      { kepler_name: planet.kepler_name },
      { kepler_name: planet.kepler_name },
      { upsert: true }
    );
  } catch (error) {
    console.error(`Could not save planet: ${error}`);
  }
}

module.exports = {
  loadPlanetsData,
  getAllPlanets,
};
