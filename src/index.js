// require('dotenv').config({path: './env'});

import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000 ,() => {
    console.log(`server is running at port : ${process.env.PORT}` );
  })
})
.catch((err) => {
  console.log("MONGODB connection failed !!! ", err)
})
















/*+++++++++++++ This is our first approach to connect database.
In this approach we use mongoose to connect with database and 
simultinously use express for starting server. Always try to wrap
up your database connection in try catch block cause you may recive 
any error. Or wrap up the whole code is async await function cause
database is always in another continent so it may take time talk 
with database. +++++++++++++++*/

/* import mongoose from "mongoose";
 import { DB_NAME } from "./constants"; these are use for the first approach*/

/*
import express from "express";
const app = express()

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listning on port ${process.env.PORT}`);
    });

  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
})();

*/
