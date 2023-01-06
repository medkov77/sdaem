const express = require("express");
const router = express.Router({ mergeParams: true });
const Idn = require("../models/Idn");

router.get("/", async (req, res) => {
  try {
    const list = await Idn.find();
    res.status(200).send(list);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка",
    });
  }
});

module.exports = router;
