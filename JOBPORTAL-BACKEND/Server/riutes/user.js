import express  from "express";
const router=express.Router();
import {sigin, singup,googleSignIn} from '../controller/user.js';

router.post('/signup',singup);
router.post('/sigin',sigin);
router.post("/googleSignIn", googleSignIn);

export default router;

