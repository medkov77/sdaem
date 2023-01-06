const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    articul: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    specifications: {
      type: Array,
      required: true,
    },
    massa: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    delivery: {
      type: String,
      required: true,
    },
    imgsrc: {
      type: String,
      required: true,
    },
    slider: {
      type: Array,
    },
    cone: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
  },

  {
    timeseries: true,
  }
);

module.exports = model("Tools", schema);
