const {
  getAllLaunches,
  scheduleNewLaunch,
  existsLaunchWithId,
  abortLaunchById,
} = require("../../models/launches.model");
const { getPagination } = require("../../services/query");

async function httpAllGetLaunches(req, res) {
  const { skip, limit } = getPagination(req.query);
  return res.json(await getAllLaunches(skip, limit));
}

async function httpAddNewLaunch(req, res) {
  const launchDate = new Date(req.body.launchDate);
  const launch = {
    launchDate,
    ...req.body,
  };

  // check if any property is missing
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({ error: "Missing required launch property" });
  }

  if (isNaN(launchDate)) {
    return res.status(400).json({ error: "Invalid launch date" });
  }

  const addedLaunch = await scheduleNewLaunch(launch);
  console.log("Added launch:", addedLaunch);
  return res.status(201).json(addedLaunch);
}

async function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id);

  // if launch does not exist
  const existsLaunch = await existsLaunchWithId(launchId);
  if (!existsLaunch) {
    return res.status(404).json({ error: "Launch was not found" });
  }

  // if launch does exist
  const aborted = await abortLaunchById(launchId);

  if (!aborted) {
    return res.status(400).json({ error: "Launch not aborted" });
  }

  return res.status(200).json({ ok: true });
}

module.exports = { httpAllGetLaunches, httpAddNewLaunch, httpAbortLaunch };
