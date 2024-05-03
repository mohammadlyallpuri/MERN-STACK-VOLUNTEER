import express from "express";
import { checkout } from "../controllers/checkout.js";

const router = express.Router();

router.post("/", checkout); // Changed the endpoint from "/checkout" to "/"

export default router;
