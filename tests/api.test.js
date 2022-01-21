const request = require("supertest");
const app = require("../App");
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

var id = new ObjectId().toString();

var train = {
  _id: id, // I will difine the id just for test
  name: "Supertrain",
};

var newTrain = {
  name: "Updatedtrain",
};

dbo.connectToServer(function (err, connec) {
  if (err) console.error(err);
  connec.dropDatabase();
});

describe("Test the train model", () => {
  test("GET /api/trains/", async () => {
    const response = await request(app).get("/api/trains");
    expect(response.statusCode).toBe(200);
  });

  test("GET /api/trains/" + id.toString(), async () => {
    const response = await request(app).get("/api/trains/" + id.toString());
    expect(response.statusCode).toBe(404);
  });

  test("POST /api/trains", async () => {
    const response = await request(app)
      .post("/api/trains")
      .send(train);
    expect(response.statusCode).toBe(200);
  });

  test("GET /api/trains/" + id.toString(), async () => {
    const response = await request(app).get("/api/trains/" + id.toString());
    expect(response.body._id).toBe(id);
  });

  test("PUT /api/trains/"+ id.toString(), async () => {
    const response = await request(app)
      .put("/api/trains/" + id.toString())
      .send(newTrain);
    expect(response.statusCode).toBe(200);
  });

  test("GET /api/trains/" + id.toString(), async () => {
    const response = await request(app).get("/api/trains/" + id.toString());
    expect(response.body.name).toBe("Updatedtrain");
  });

  test("DELETE /api/trains/" + id.toString(), async () => {
    const response = await request(app).delete("/api/trains/" + id.toString());
    expect(response.statusCode).toBe(200);
  });
});
