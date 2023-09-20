import mongoose from "mongoose";
const { Schema } = mongoose;

const theatreSchema = new Schema({
  name: String,
  address: String,
  images: [String],
  capacity: Number,
  contact_information: String,
  technical_specification: String,
  availability: String,
  rental_fees: Number,
  rating: Number,
  reviews: [String],
  amenities: String,
  accessibility: String,
});

const theatreModel = mongoose.model("Theatre", theatreSchema);

export default theatreModel;
