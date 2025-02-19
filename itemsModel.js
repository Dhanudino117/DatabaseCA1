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

const menuItemsSchema = new mongoose.Schema({
  menuId: {
    type: mongoose.Schema.Types.ObjectId,
    unique: true,
    required: true,
  },
  items: [itemsSchema],
});

const menuItems = mongoose.model("menuItems", menuItemsSchema);
export default menuItems;
