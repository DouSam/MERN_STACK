var router = require("express").Router();
const {
  findAll,
  findById,
  create,
  updateById,
  deleteById,
} = require("./serviceTrains");

router.get("/", async (req, res) => {
  let trains = await findAll();
  res.json(trains);
});

router.get("/:id", async (req, res) => {
  let train = await findById(req.params.id);
  if(train != undefined){
    res.json(train);
  }
  else {
    res.sendStatus(404);
  }
});

router.post("/", async (req, res) => {
  let result = await create(req.body);
  res.json(result);
});

router.put("/:id", async (req, res) => {
  let result = await updateById(req.params.id,req.body);
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  let result = await deleteById(req.params.id);
  res.json(result);
});

module.exports = router;
