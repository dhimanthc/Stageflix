import mongoose from "mongoose";
const { Schema } = mongoose;

const peopleSchema = new Schema({
  first_name: String,
  last_name: String,
  images: [String],
  date_of_birth: Date,
  place_of_birth: String,
  biography: String,
  gender: String,
  nationality: String,
  contact_details: String,
  website: String,
  social_media_handles: [String],
  awards: [String],
  skills: [String],
});

const peopleModel = mongoose.model("People", peopleSchema);

export default peopleModel;
