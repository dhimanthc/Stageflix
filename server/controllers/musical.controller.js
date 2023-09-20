import { Configuration, OpenAIApi } from "openai";
import musicalModel from "./../models/Musical.model.js";

const index = async (req, res) => {
  const allMusicals = await musicalModel.find();
  res.status(200).json(allMusicals);
};

const addMusical = async (req, res) => {
  // TODO
};

const viewMusical = async (req, res) => {
  const { id } = req.params;
  const musical = await musicalModel.findById(id);
  res.status(200).json(musical);
};

const searchMusical = async (req, res) => {
  const { input } = req.body;
  const configuration = new Configuration({
    apiKey: process.env.OPENAIAPIKEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Output only the Mongoose filter to be passed to find() method to retrieve ${input}, for the MongoDB database model provided below. Don't print any extra message.

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
  `,
  });
  const completion = response.data.choices[0].text;
  const musicalsResult = await musicalModel.find(eval(`(${completion})`));
  res.status(200).json(musicalsResult);
};

const updateMusical = async (req, res) => {
  // TODO
};

const deleteMusical = async (req, res) => {
  // TODO
};

export default {
  index,
  addMusical,
  viewMusical,
  searchMusical,
  updateMusical,
  deleteMusical,
};
