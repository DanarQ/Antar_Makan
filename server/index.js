import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//setelah production ganti ke domain production
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

import mitraRoutes from "./routes/mitraRoutes.js";

//Routes
app.use("/mitras", mitraRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});
