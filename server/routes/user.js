import express from "express";
import { authenticate, requireRole } from "../middleware/auth.js";

const router = express.Router();

// Semua route di sini hanya bisa diakses oleh role "user"
router.use(authenticate, requireRole("user"));

router.get("/profile", (req, res) => {
  res.json({ message: "Profil user", userId: req.user.id });
});

export default router;
