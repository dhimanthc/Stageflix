import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

dotenv.config();

const port = process.env.PORT;

import theatreRouter from "./routes/theatre.route.js";
import playRouter from "./routes/play.route.js";
import musicalRouter from "./routes/musical.route.js";
import peopleRouter from "./routes/people.route.js";
import showRouter from "./routes/show.route.js";
import viewerRouter from "./routes/viewer.route.js";

mongoose.set("strictQuery", false);

mongoose.connect(process.env.DBURL, { useNewUrlParser: true }, () => {
  console.log("Connected to DB");
});

app.use("/theatres", theatreRouter);
app.use("/plays", playRouter);
app.use("/musicals", musicalRouter);
app.use("/people", peopleRouter);
app.use("/shows", showRouter);
app.use("/viewer", viewerRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({ message: "Page Not Found" });
});

app.use((err, req, res, next) => {
  res.status(500).render(err.message);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
