import express from "express";
import Bible from "../models/Bible.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = express.Router();

router.get(
  "/bible",
  asyncHandler(async (req, res) => {
    const count = parseInt(req.query.count, 10) || 50;
    const bible = await Bible.aggregate([
      { $sample: { size: count } }, // 랜덤으로 count 개수만큼 데이터를 가져옴
    ]);
    res.json(bible);
  })
);

router.post(
  "/bible",
  asyncHandler(async (req, res) => {
    const { verse, text } = req.body;
    const bible = await Bible.create({
      verse,
      text,
    });
    res.status(201).json(bible);
  })
);

router.delete(
  "/bible/:bibleId",
  asyncHandler(async (req, res) => {
    const bible = await Bible.findByIdAndDelete(req.params.bibleId);
    if (!bible) {
      return res.status(404).json({ massage: "bible not found" });
    }
    res.json({ message: "bible deleted" });
  })
);

export default router;
