import express from "express";
import "dotenv/config";
import connectDB from "./db.js";
import restaurantmodel from "./restaturantModel.js";
import menuItems from "./itemsModel.js";

const app = express();
const port = process.env.PORT;
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.listen(port, () => {
  console.log(`Your server is running on http://localhost:${port}`);
});
