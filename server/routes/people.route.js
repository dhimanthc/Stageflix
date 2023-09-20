import express from "express";
const router = express.Router();

import peopleController from "./../controllers/people.controller.js";

import catchAsync from "./../utils/catchAsync.util.js";

router.route("/:id").get(catchAsync(peopleController.viewPerson));

export default router;
