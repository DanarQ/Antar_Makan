import express from "express";
import { authenticate, requireRole } from "../middleware/auth.js";

const router = express.Router();

// Semua route di sini hanya bisa diakses oleh role "driver"
router.use(authenticate, requireRole("driver"));

router.get("/profile", (req, res) => {
  res.json({ message: "Profil driver", driverId: req.user.id });
});

export default router;
