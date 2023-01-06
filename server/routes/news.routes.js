const express = require("express");
const router = express.Router({ mergeParams: true });
const News = require("../models/News");

router.get("/", async (req, res) => {
  try {
    const list = await News.find();
    res.status(200).send(list);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка",
    });
  }
});

router.get("/:newsId", async (req, res) => {
  try {
    const { newsId } = req.params;
    console.log(newsId);
    const list = await News.findById(newsId).exec();
    res.status(200).send(list);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка",
    });
  }
});

router.post("/search", async (req, res) => {
  try {
    const text = req.body.payload.trim();
    const search = await News.find({
      title: {
        $regex: new RegExp(text, "i"),
      },
    }).exec();
    res.status(200).send(search);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
