import express, { NextFunction, Request, Response } from "express";
require('dotenv').config();
export const app = express();
import cookieParser from "cookie-parser";
import  cors  from "cors";
import { ErrorMiddleware } from "./middleware/error";

// body parcer

app.use(express.json({limit: "50mb"}));

// cookie parcer

 app.use(cookieParser());

 // cors => cross origin resource sharing 
 app.use(cors({
    origin: process.env.ORIGIN
 }));

 // TESTING API 

 app.get("/test", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        success: true,
        message: "API is working",
    })
 });  


// unknown route
app.all("*", (req: Request, res: Response, next: NextFunction) => {
    const err = new Error(`Route ${req.originalUrl} not found`) as any;
    err.statusCode = 404;
    next(err);
  });

  app.use(ErrorMiddleware);