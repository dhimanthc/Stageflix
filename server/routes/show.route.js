import express from "express";
const router = express.Router();

import showController from "./../controllers/show.controller.js";

import catchAsync from "./../utils/catchAsync.util.js";

router.route("/").get(catchAsync(showController.index));

router.route("/:id").get(catchAsync(showController.viewShow));

router.route("/search").post(catchAsync(showController.searchShow));

export default router;
