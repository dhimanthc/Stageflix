import express from "express";
const router = express.Router();

import playController from "./../controllers/play.controller.js";

import catchAsync from "./../utils/catchAsync.util.js";

router.route("/").get(catchAsync(playController.index));

router.route("/:id").get(catchAsync(playController.viewPlay));

router.route("/search").post(catchAsync(playController.searchPlay));

export default router;
