import { Schema, model } from "mongoose";

const ScreeningSchema = new Schema(
  {
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    movieId: {
      type: Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
    seats: {
      type: [Boolean],
      required: true,
      default: () => Array(100).fill(false),
    },
  },
  {
    timestamps: true,
  }
);

ScreeningSchema.virtual("movie", {
  ref: "Movie",
  localField: "movieId",
  foreignField: "_id",
});

const Screening = model("Screening", ScreeningSchema);

export default Screening;
