import dotenv from "dotenv";
import express from "express";

dotenv.config();

export const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("server started at port ");
});
