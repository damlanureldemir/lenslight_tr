import express from "express";
const app = express();

const port = 3001;

app.get("/", (req, res) => {
  res.send("INDEX SAYFASI 6");
});

app.listen(port, () => {
  console.log("Application running on port: ${port}");
});
