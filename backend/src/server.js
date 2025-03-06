import mongoose from "mongoose";
import * as dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT;

// ✅ MongoDB 연결
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("✅ Connected to MongoDB");

    // ✅ "/health" 엔드포인트 추가
    app.get("/health", (req, res) => {
      res.status(200).json({ status: "OK", message: "Server is running!" });
    });

    // ✅ 서버 실행
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB", err);
  });
