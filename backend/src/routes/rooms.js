import express from "express";
import Room from "../models/Rooms.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = express.Router();

router.get(
  "/rooms",
  asyncHandler(async (req, res) => {
    const room = await Room.find();
    res.json(room);
  })
);

router.get(
  "/rooms/:roomsId",
  asyncHandler(async (req, res) => {
    const id = req.params.roomsId;
    const room = await Room.findById(id);
    if (room) {
      res.json(room);
    } else {
      res.status(404).send({ message: "Cannot find given id" });
    }
  })
);

export default router;
