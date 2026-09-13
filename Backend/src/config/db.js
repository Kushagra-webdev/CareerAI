const mongoose = require("mongoose");

async function ConnectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Db connected`)
    } catch (err) {
        console.error(err)
        console.log('not connected')
    }
}

module.exports = ConnectDB;
