import mongoose from "mongoose";
const { Schema } = mongoose;

const playSchema = new Schema({
  title: String,
  authors: [String],
  synopsis: String,
  duration: String,
  images: [String],
  cast: [String],
  directors: [String],
  producers: [String],
  production_companies: [String],
  date_of_production: Date,
  genre: [String],
  language: String,
  country: String,
  awards: [String],
  rating: Number,
  reviews: [String],
  url: String,
});

const playModel = mongoose.model("Play", playSchema);

export default playModel;
