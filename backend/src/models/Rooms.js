import mongoose from "mongoose";

const RoomsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    capacity: {
      type: Number,
    },
    bgColor: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model("Room", RoomsSchema);

export default Room;
