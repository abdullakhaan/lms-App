import { app } from "./app";
import {v2 as cloudinary} from "cloudinary";
import connectDB from "./utils/db";
require("dotenv").config();

//Cloudinary config

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    secter_key: process.env.CLOUD_SECRET_KEY,
});



//create server
app.listen(process.env.PORT, () => {
    console.log(`Server is connceted with port ${process.env.PORT}`);
    connectDB();
});