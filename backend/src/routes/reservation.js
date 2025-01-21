import express from "express";
import Reservation from "../models/Reservation.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = express.Router();

// GET : 모든 예약 조회
router.get(
  "/reservation",
  asyncHandler(async (req, res) => {
    const reservation = await Reservation.find();
    res.json(reservation);
  })
);

// GET : 특정 예약 조회하기
router.get(
  "/reservation/:reservationId",
  asyncHandler(async (req, res) => {
    const reservation = await Reservation.findById(req.params.reservationId);
    if (!reservation) {
      return res.status(404).json({ message: "Reservation not Found" });
    }
    res.json(reservation);
  })
);

// GET : 특정 회의실에 대한 예약 조회
router.get(
  "/reservation/room/:roomId",
  asyncHandler(async (req, res) => {
    const reservation = await Reservation.find({ roomId: req.params.roomId });

    if (!reservation.length) {
      return res
        .status(404)
        .json({ message: "No reservation found for this room" });
    }

    res.json(reservation);
  })
);

// POST : 새로운 예약 생성하기
router.post(
  "/reservation/:roomId",
  asyncHandler(async (req, res) => {
    const { roomId } = req.params;
    const { title, description, startTime, endTime, booker } = req.body;

    const overlappingReservations = await Reservation.find({
      roomId, // 같은 회의실에 대해
      $or: [
        { startTime: { $lt: endTime }, endTime: { $gt: startTime } }, // 시간 범위가 겹치는 경우
      ],
    });

    if (overlappingReservations.length > 0) {
      return res
        .status(400)
        .json({
          message: "Reservation time overlaps with an existing reservation.",
        });
    }

    const reservation = await Reservation.create({
      title,
      description,
      roomId,
      startTime,
      endTime,
      booker,
    });
    res.status(201).json(reservation);
  })
);

// DELETE : 특정 예약 삭제
router.delete(
  "/reservation/:reservationId",
  asyncHandler(async (req, res) => {
    const reservation = await Reservation.findByIdAndDelete(
      req.params.reservationId
    );
    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    res.json({ message: "Reservation deleted" });
  })
);

export default router;
