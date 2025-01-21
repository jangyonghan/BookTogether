import mongoose from "mongoose";

const BibleSchema = new mongoose.Schema(
  {
    verse: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Bible = mongoose.model("Bible", BibleSchema);

export default Bible;
