const dalTrains = require("./dalTrains");

const ObjectId = require("mongodb").ObjectId;

module.exports = {
  /**
   * Find all trains documents.
   * @returns {Array<trains>} This return a array of trains documents.
   */
  findAll: async function () {
    return await dalTrains.findAll();
  },
  /**
   * Find a unique document with `id` passed.
   * @param {ObjectId} id This param references the document id.
   * @returns {train} This return a unique train document.
   */
  findById: async function (id) {
    let query = { _id: ObjectId(id) };
    return await dalTrains.findById(query);
  },
  /**
   * Create a document.
   * @param {Object<Train>} train A train object to insert.
   * @returns {InsertOneResult<Train>} This returns a object with the id of new document.
   */
  create: async function (train) {
    return await dalTrains.create(train);
  },
  /**
   * Update a existing document.
   * @param {ObjectId} id Id of the document that will be updated.
   * @param {Object<Train>} newTrain A object with the fields to update.
   * @returns {UpdateResult}
   */
  updateById: async function (id, newTrain) {
    let myquery = { _id: ObjectId(id) };
    newTrain = {
      "$set": newTrain,
    };
    return await dalTrains.updateById(myquery, newTrain);
  },
  /**
   * Delete a document.
   * @param {ObjectId} id Id of the document that will be deleted.
   * @returns The number of documents deleted.
   */
  deleteById: async function (id) {
    let myquery = { _id: ObjectId(id) };
    return await dalTrains.deleteById(myquery);
  },
};
