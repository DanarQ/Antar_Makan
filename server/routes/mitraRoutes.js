import express from "express";
import { db } from "../db.js";

const router = express.Router();

//Get Semua nama mitra
router.get("/", async (req, res) => {
  const { rows } = await db.query("SELECT * FROM MitraMakanan");
  res.json(rows);
});

export default router;
