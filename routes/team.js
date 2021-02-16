const express = require("express");
const router = express.Router();
const Team = require("../models/team");
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const { conf } = req.query;
    if (conf) {
      const teams = await Team.find({ conference: conf });
      res.render("index", { teams });
    } else {
      const teams = await Team.find({});
      res.render("index", { teams });
    }
  } catch (error) {
    console.log(error);
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const team = await Team.findById(id);
  res.render("show", { team });
});

module.exports = router;
