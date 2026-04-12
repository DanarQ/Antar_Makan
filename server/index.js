import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mitraRoutes from "./routes/mitraRoutes.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import driverRoutes from "./routes/driver.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//setelah production ganti ke domain production
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

//Routes
app.use("/api/mitras", mitraRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/driver", driverRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});
