import express from "express";
import { postMessage } from "../controllers/messageController.js";


// Controller logic goes here


const router =express.Router();

router.post("/send",postMessage)

export default router;