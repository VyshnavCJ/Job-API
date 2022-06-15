const User = require("../models/User");
const StatusCode = require("http-status-codes");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });

  res
    .status(StatusCode.CREATED)
    .json({ user: { name: user.getName() }, token: user.createJWT() });
};

const login = async (req, res) => {
  res.send("logging...");
};

module.exports = {
  register,
  login,
};
