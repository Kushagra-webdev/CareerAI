require("dotenv").config();
const app = require("./src/app");
const ConnectDB = require("./src/config/db");

const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const PORT = 3000;

ConnectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
