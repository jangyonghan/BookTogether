import mongoose from "mongoose";
import reservations from "../mock/reservationMock.js";
import Reservation from "../models/Reservation.js";
import * as dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.DATABASE_URL);

await Reservation.deleteMany({}); //deletemany는 삭제조건을 파라미터로 받는데 지금은 빈객체를 받고 있는데 모든 조건이 만족해서 삭제됨
await Reservation.insertMany(reservations); // 삽입할 데이터를 파라미터로 받는다.

mongoose.connection.close();
