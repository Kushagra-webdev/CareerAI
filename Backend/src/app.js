const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
 
//import routes
const authRouter = require('./routes/auth.route');
const interviewRouter = require('./routes/interview.routes');

// use routes
app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter); 


module.exports = app;
