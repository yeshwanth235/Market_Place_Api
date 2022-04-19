const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/upload", (req, res) => {
  try {
    const data = req.body;
    let imgdata = JSON.stringify(data);
    const imageData = imgdata.substring(imgdata.indexOf(",") + 1);
    axios({
      method: "post",
      url: "https://api.remove.bg/v1.0/removebg",
      data: {
        image_file_b64: imageData,
      },
      responseType: "json",
      headers: {
        "X-Api-Key": process.env.BG_KEY,
        Accept: "application/json",
      },
    })
      .then((response) => {
        let data = `data:image/jpeg;base64,${response.data.data.result_b64}`;
        return res.json({ image: data });
      })
      .catch((error) => {
        console.error("Request failed:", error.response.data);
        return res.end();
      });
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
