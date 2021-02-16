const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/teams", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.set("view engine", "ejs");

const teamRoutes = require("./routes/team");

app.use("/teams", teamRoutes);

app.get("/", (req, res) => {
  res.send("<h1>WELCOME</h1>");
});

app.listen(3000, () => {
  console.log("listening on port: 3000");
});
