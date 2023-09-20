import express from "express";
const router = express.Router();

import musicalController from "./../controllers/musical.controller.js";

import catchAsync from "./../utils/catchAsync.util.js";

router.route("/").get(catchAsync(musicalController.index));

router.route("/:id").get(catchAsync(musicalController.viewMusical));

router.route("/search").post(catchAsync(musicalController.searchMusical));

export default router;
