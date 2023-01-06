const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    imgsrc: {
      type: String,
      required: true,
    },
  },

  {
    timeseries: true,
  }
);

module.exports = model("Options", schema);
