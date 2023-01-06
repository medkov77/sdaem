const express = require("express");
const Tools = require("../models/Tools");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const allList = await Tools.find().sort("_id");
    res.status(200).send({ list: allList });
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка",
    });
  }
});

router.get("/:toolId", async (req, res) => {
  try {
    const { toolId } = req.params;
    const list = await Tools.findById(toolId).exec();
    res.status(200).send(list);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: "На сервере произошла ошибка",
    });
  }
});
module.exports = router;
