const mongoose = require("mongoose");
const db_connect = async () => {
  try {
    if (process.env.mode === "production") {
      await mongoose.connect(process.env.db_production_url);
      console.log("Production database connect succesfully");
    } else {
      await mongoose.connect(process.env.db_local_url);
      console.log("Local database connect succesfully");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = db_connect;
