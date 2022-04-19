const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

router.get("/signup", (req, res) => {
  res.send("get router");
});

router.post("/register", async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ msg: "user already exists" });
  }
  try {
    const userData = User({
      user: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const hashpassword = await bcrypt.hash(req.body.password, 10);
    userData.password = hashpassword;
    await userData.save();
    res.status(200).json(userData);
  } catch (e) {
    res.send(e.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let exists = await User.findOne({
      email,
    });
    const validPassword = await bcrypt.compare(password, exists.password);
    const payload = {
      User: {
        id: exists.email,
      },
    };
    if (validPassword) {
      jwt.sign(payload, process.env.JWT_KEY, (err, token) => {
        return res.json({ status: true, token, isuser: true });
      });
    } else {
      return res.json({ status: false });
    }
  } catch (err) {
    return res.json({ sucess: false });
  }
});

module.exports = router;
