const mongoose = require("mongoose");

// Track the connection state globally across serverless invocations
let isConnected = false; 

async function ConnectDB() {
    // If already connected, reuse the connection and exit
    if (isConnected) {
        console.log("Using existing database connection");
        return;
    }

    try {
        // Await the connection and update the global state
        const db = await mongoose.connect(process.env.MONGO_URI);
        isConnected = db.connections[0].readyState === 1;
        console.log("Db connected");
    } catch (err) {
        console.error(err);
        console.log("not connected");
        // Re-throw the error so your app knows the DB failed
        throw err; 
    }
}

module.exports = ConnectDB;