require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();


// local modules.
const connectDB = require("./database/dbconfig");


const PORT = process.env.PORT || 8080;

connectDB();

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST"],
}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/", (req, res) => {
    return res.send("hello");
})

app.use("/api/v1/user", require("./routes/userRouter"));

app.listen(PORT, () => {
    console.log(`Running at port: ${PORT}`);
})