import mongoose from "mongoose";
const { Schema } = mongoose;

const musicalSchema = new Schema({
  title: String,
  composers: [String],
  lyricists: [String],
  book_writers: [String],
  synopsis: String,
  duration: String,
  images: [String],
  cast: [String],
  directors: [String],
  producers: [String],
  production_companies: [String],
  date_of_production: Date,
  language: String,
  genre: [String],
  country: String,
  awards: [String],
  rating: Number,
  reviews: [String],
  url: String,
});

const musicalModel = mongoose.model("Musical", musicalSchema);

export default musicalModel;
