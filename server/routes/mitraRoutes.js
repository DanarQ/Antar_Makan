import express from "express";

const router = express.Router();
import { getMitras } from "../controller/mitraController.js";

router.get("/", getMitras);
export default router;
