import mongoose from "mongoose";
import bcrypt from "bcrypt";
const { Schema } = mongoose;

const viewerSchema = new Schema({
  name: String,
  email: String,
  password: String,
  profile_picture: String,
  age: String,
  gender: String,
  location: String,
  genre_preferences: String,
  language_preferences: String,
  recently_watched: [String],
  favorites: [String],
  watchlist: [String],
  createdAt: Date,
});

viewerSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

const viewerModel = mongoose.model("Viewer", viewerSchema);

export default viewerModel;
