import express from "express";
const router = express.Router();

import viewerController from "./../controllers/viewer.controller.js";

import catchAsync from "./../utils/catchAsync.util.js";

router.route("/login").post(catchAsync(viewerController.login));

router.route("/register").post(catchAsync(viewerController.register));

router.route("/verify").post(catchAsync(viewerController.verification));

export default router;
