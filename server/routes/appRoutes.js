import { app } from "../app";

app.get("/", (req, res) => {
  res.send("<h1>Root </h1>");
});
