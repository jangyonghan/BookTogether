import express from "express";
import Bible from "../models/Bible.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = express.Router();

router.get(
  "/bible",
  asyncHandler(async (req, res) => {
    const bible = await Bible.find();
    res.json(bible);
  })
);

export default router;
