const mongoose = require("mongoose");

const connectDB = async () => {

    await mongoose.connect(
        process.env.DB_URI
    );

    console.log("DB Connected");
};

module.exports = connectDB;