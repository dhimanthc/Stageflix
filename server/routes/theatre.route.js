import express from "express";
const router = express.Router();

import theatreController from "./../controllers/theatre.controller.js";

import catchAsync from "./../utils/catchAsync.util.js";

router.route("/").get(catchAsync(theatreController.index));

router.route("/:id").get(catchAsync(theatreController.viewTheatre));

export default router;
