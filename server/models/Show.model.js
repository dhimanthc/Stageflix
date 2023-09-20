import mongoose from "mongoose";
const { Schema } = mongoose;

const showSchema = new Schema({
  title: String,
  authors: [String],
  description: String,
  date: Date,
  venue: String,
  address: String,
  images: [String],
  cast: [String],
  directors: [String],
  producers: [String],
  productionCompanies: [String],
  genre: [String],
  duration: String,
  rating: Number,
  reviews: [String],
  ticketsAvailable: Number,
  ticketPrice: Number,
  url: String,
});

const showModel = mongoose.model("Show", showSchema);

export default showModel;
