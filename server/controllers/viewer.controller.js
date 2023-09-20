import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import viewerModel from "./../models/Viewer.model.js";
import createSecretToken from "./../utils/secretToken.js";

dotenv.config({ path: "./../.env" });

const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(200).json({ message: "All fields are required" });
  }
  const viewer = await viewerModel.findOne({ email });
  if (!viewer) {
    return res.status(200).json({ message: "Incorrect email or password" });
  }
  const auth = await bcrypt.compare(password, viewer.password);
  if (!auth) {
    return res.status(200).json({ message: "Incorrect email or password" });
  }
  const token = createSecretToken(viewer._id);
  res.cookie("token", token, {
    withCredentials: true,
    httpOnly: false,
  });
  res
    .status(200)
    .json({ message: "Viewer logged in successfully", success: true });
  next();
};

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  const existingViewer = await viewerModel.findOne({ email });
  if (existingViewer) {
    return res.status(200).json({ message: "Viewer already exists" });
  }
  const viewer = await viewerModel.create({
    name,
    email,
    password,
    createdAt: Date.now(),
  });
  const token = createSecretToken(viewer._id);
  res.cookie("token", token, {
    withCredentials: true,
    httpOnly: false,
  });
  res
    .status(200)
    .json({ message: "Viewer signed in successfully", success: true, viewer });
  next();
};

const verification = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKENKEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await viewerModel.findById(data.id);
      if (user) return res.json({ status: true, user: user.name });
      else return res.json({ status: false });
    }
  });
};

export default {
  login,
  register,
  verification,
};
