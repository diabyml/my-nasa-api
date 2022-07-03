const request = require("supertest");
const app = require("../../app");
const { loadPlanetsData } = require("../../models/planets.model");
const { mongoConnect, mongoDisconnect } = require("../../services/mongo");

// add this line to your package.json
// "jest":{
//     "testEnvironment":"node"
//   },

// to have mongo connection through our tests
// we can wrap all describes in a single decribe

describe("Launches API", () => {
  // Establish mongo connection before running tests
  beforeAll(async () => {
    await mongoConnect();
    await loadPlanetsData();
  });

  // Disconnnect afte running tests
  afterAll(async () => {
    await mongoDisconnect();
  });

  describe("Test GET /launches", () => {
    test("It should respond with 200 success", async () => {
      await request(app)
        .get("/v1/launches")
        .expect(200)
        .expect("Content-Type", /json/);
    });
  });

  describe(" Test POST /launch ", () => {
    const completeLaunchData = {
      mission: "USS Enterprise",
      rocket: "NCC 1701-D",
      target: "Kepler-1652 b",
      launchDate: "December 27, 2030",
    };

    const launchDataWithoutDate = {
      mission: "USS Enterprise",
      rocket: "NCC 1701-D",
      target: "Kepler-1652 b",
    };

    test("It should respond with 201 created", async () => {
      const response = await request(app)
        .post("/v1/launches")
        .send(completeLaunchData)
        .expect("Content-Type", /json/)
        .expect(201);

      const requestDate = new Date(completeLaunchData.launchDate).valueOf();
      const responseDate = new Date(response.body.launchDate).valueOf();

      // expect(requestDate).toBe(responseDate);
      // expect(response.body).toMatchObject(launchDataWithoutDate);
    });

    test("It should catch missing required properties", async () => {
      const response = await request(app)
        .post("/v1/launches")
        .send({
          mission: "USS Enterprise",
          rocket: "NCC 1701-D",
          launchDate: "December 27, 2030",
        })
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body).toStrictEqual({
        error: "Missing required launch property",
      });
    });

    test("It should catch invalid date", async () => {
      const response = await request(app)
        .post("/v1/launches")
        .send({
          mission: "USS Enterprise",
          rocket: "NCC 1701-D",
          target: "Kepler-1652 b",
          launchDate: "hello",
        })
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body).toStrictEqual({ error: "Invalid launch date" });
    });
  });
});
