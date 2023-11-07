import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
import router from "./route/web";
import connectDB from "./config/connectDB";
const cors = require('cors');

require('dotenv').config;

let app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

app.use("/api", router);
app.use(router);

configViewEngine(app);

connectDB();

let port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log("backend node js runing in the port" + port);
})