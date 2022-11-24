import express from "express";
const router = express.Router();
import {createTour,getTours} from "../controller/tour.js";

router.post("/", createTour);
router.get("/", getTours);


export default router;