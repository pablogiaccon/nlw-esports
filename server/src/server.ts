import express from "express";

const app = express();

app.get("/ads", (req, res) => {
  console.log("Access Ads!");

  return res.send("Access");
});

app.listen(3333);
