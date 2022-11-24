import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import morgan from "morgan";
import userRouter from './riutes/user.js'
import tourRouter from "./riutes/tour.js"
const app = express()
//mongodb+srv://mern_project:<password>@cluster0.rhsvf.mongodb.net/?retryWrites=true&w=majority
app.use(morgan("dev"))
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/users', userRouter); // http://localhost:5000/users/signup
app.use('/tour',tourRouter);    // http://localhost:5000/users/signup

const MONGODB_URL = "mongodb+srv://mern_project:WIopIQMehw4RZWvw@cluster0.rhsvf.mongodb.net/tur_db"
const port = 5000
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

  //to start a backend server run npm run dev.