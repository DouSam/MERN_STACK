// This will help us connect to the database
const dbo = require("../../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

module.exports = {
  findAll: async function () {
    let db_connect = dbo.getDb();
    return await db_connect.collection("trains").find({}).toArray();
  },
  findById: async function (id) {
    let db_connect = dbo.getDb();
    let query = { _id: ObjectId(id) };
    return await db_connect.collection("trains").findOne(query);
  },
  create: async function (train) {
    let db_connect = dbo.getDb();
    return await db_connect.collection("trains").insertOne(train);
  },
  updateById: async function (id, newTrain) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(id) };
    return await db_connect.collection("trains").updateOne(myquery, newTrain);
  },
  deleteById: async function (id) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(id) };
    return await db_connect.collection("trains").deleteOne(myquery);
  },
};
