const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
    },
    text: {
      type: Array,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },

  {
    timeseries: true,
  }
);

module.exports = model("News", schema);

// title: string;
//   text: string;
//   image: string;
//   date: string;
