import mongoose from "mongoose";

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Mongodb is connected ucessfully");
    })
    .catch(() => {
      console.log("Mongodb is not connected");
    });
};

export default connectDB;
