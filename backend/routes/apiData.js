const express = require("express");
const router = express.Router();
const api = require("../models/Api");

router.get("/fetchApi", async (req, res) => {
  const apiData = await api.find({});
  console.log("Fetching the api data");
  res.status(200).json(apiData);
});

router.post("/apiData", async (req, res) => {
  try {
    let data = req.body;
    const apinfo = api({
      name: data.name,
      email: data.email,
      endpoint: data.endpoint,
      imgFile: data.imgFile,
      description: data.description,
    });
    await apinfo.save();
    res.json(apinfo);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
