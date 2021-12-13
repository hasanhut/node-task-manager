const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
//.env MONGO_URI
require("dotenv").config();
//db connection
const connectDB = require("./db/connect");
//middleware
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
    res.send("Task Manager APP");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

const connect = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log("server is listening on port " + port));
    } catch (error) {
        console.log(error);
    }
};

connect();
