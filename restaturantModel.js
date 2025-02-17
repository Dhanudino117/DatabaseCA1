import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const restaurantmodel = mongoose.model("restaurant", restaurantSchema);

export default restaurantmodel;
