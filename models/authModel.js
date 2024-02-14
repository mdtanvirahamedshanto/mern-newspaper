const { model, Schema } = require("mongoose");

const authSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timeseries: true }
);

module.exports = model("author", authSchema);
