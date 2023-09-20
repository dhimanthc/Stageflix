import { Configuration, OpenAIApi } from "openai";
import playModel from "./../models/Play.model.js";

const index = async (req, res) => {
  const allPlays = await playModel.find();
  res.status(200).json(allPlays);
};

const addPlay = async (req, res) => {
  // TODO
};

const viewPlay = async (req, res) => {
  const { id } = req.params;
  const play = await playModel.findById(id);
  res.status(200).json(play);
};

const searchPlay = async (req, res) => {
  const { input } = req.body;
  const configuration = new Configuration({
    apiKey: process.env.OPENAIAPIKEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Output only the Mongoose filter to be passed to find() method to retrieve ${input}, for the MongoDB database model provided below. Don't print any extra message.

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
  `,
  });
  const completion = response.data.choices[0].text;
  const playsResult = await playModel.find(eval(`(${completion})`));
  res.status(200).json(playsResult);
};

const updatePlay = async (req, res) => {
  // TODO
};

const deletePlay = async (req, res) => {
  // TODO
};

export default {
  index,
  addPlay,
  viewPlay,
  searchPlay,
  updatePlay,
  deletePlay,
};
