import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectToDb } from "./db/dbConnect.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

Promise.all([connectToDb()])
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
