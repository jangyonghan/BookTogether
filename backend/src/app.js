import express from "express";
import mongoose from "mongoose";
import Room from "./models/Rooms.js";
import { asyncHandler } from "./utils/asyncHandler.js";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get(
  "/rooms",
  asyncHandler(async (req, res) => {
    const room = await Room.find();
    res.send(room);
  })
);

app.get(
  "/rooms/:roomsId",
  asyncHandler(async (req, res) => {
    const id = req.params.roomsId;
    const room = await Room.findById(id);
    if (room) {
      res.send(room);
    } else {
      res.status(404).send({ message: "Cannot find given id" });
    }
  })
);
app.listen(process.env.PORT || 3000, () => console.log("Server Started"));
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to DB"));
