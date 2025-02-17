import mongoose from "mongoose";
const itemsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);
const menuitems = mongoose.Schema({
  id: mongoose.ObjectId.String,
  items: [itemsSchema],
});

const items = mongoose.model("items", menuitems);
export default items;
