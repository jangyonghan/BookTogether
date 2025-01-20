import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      enum: ["피드백", "회의", "모임", "기타"],
    },
    description: {
      type: String,
    },
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "Room",
    }, // Room 참조
    startTime: {
      type: Date,
      require: true,
    },
    endTime: {
      type: Date,
      require: true,
    },
    booker: {
      type: String,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt 자동 생성
  }
);

const Reservation = mongoose.model("Reservation", ReservationSchema);

export default Reservation;
