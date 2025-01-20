import express from "express";
import cors from "cors";
import RoomRouter from "./routes/rooms.js";
import ReservationRouter from "./routes/reservation.js";

const app = express();

app.use(cors());
app.use(express.json());

// 라우터 연결
app.use("/", RoomRouter); // '/Room' 라우트 연결
app.use("/", ReservationRouter); // '/Reservation' 라우트 연결

// 404 처리 (없는 경로 요청)
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// 에러 핸들러 (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

export default app;
