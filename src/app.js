const mongoose= require('mongoose');
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const routes = require("./routes/admin.routes");
const { PORT } = require("../config/config");
const app = express();

app.use(express.json());
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(express.static(process.cwd() + "/public"));
  app.use("/uploads", express.static(process.cwd() + "/uploads"));
  app.use(fileUpload());
  app.use("/" , routes);

const bootstrap = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/exam")

    app.listen(PORT, ()=>{
        console.log(PORT);
    })
}

bootstrap()