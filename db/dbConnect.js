import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_ATLAS_URL);
    console.log("Connected to database");
  } catch (error) {
    throw "Failed to connect to database";
  }
};
