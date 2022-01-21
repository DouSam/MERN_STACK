// This will help us connect to the database
const dbo = require("../../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

module.exports = {
  /**
   * Find all trains documents.
   * @returns {Array<trains>} This return a array of trains documents.
   */
  findAll: async function () {
    let db_connect = dbo.getDb();
    return await db_connect.collection("trains").find({}).toArray();
  },
  /**
   * Find a unique document with `id` passed.
   * @param {ObjectId} id This param references the document id.
   * @returns {train} This return a unique train document.
   */
  findById: async function (query) {
    let db_connect = dbo.getDb();
    return await db_connect.collection("trains").findOne(query);
  },
  /**
   * Create a document.
   * @param {Object<Train>} train A train object to insert.
   * @returns {InsertOneResult<Train>} This returns a object with the id of new document.
   */
  create: async function (train) {
    let db_connect = dbo.getDb();
    return await db_connect.collection("trains").insertOne(train);
  },
  /**
   * Update a existing document.
   * @param {ObjectId} id Id of the document that will be updated.
   * @param {Object<Train>} newTrain A object with the fields to update.
   * @returns {UpdateResult}
   */
  updateById: async function (myQuery, newTrain) {
    let db_connect = dbo.getDb();
    return await db_connect.collection("trains").updateOne(myQuery, newTrain);
  },
  /**
   * Delete a document.
   * @param {ObjectId} id Id of the document that will be deleted.
   * @returns The number of documents deleted.
   */
  deleteById: async function (myQuery) {
    let db_connect = dbo.getDb();
    return await db_connect.collection("trains").deleteOne(myQuery);
  },
};
