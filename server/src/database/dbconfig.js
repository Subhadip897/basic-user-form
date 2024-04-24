const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "User-Info",
            maxConnecting: 4,
            maxPoolSize: 4,
        });

        console.log(`Db connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("db connection error", error);
    }
}

module.exports = connectDB;