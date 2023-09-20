import { Configuration, OpenAIApi } from "openai";
import showModel from "./../models/Show.model.js";

const index = async (req, res) => {
  const allShows = await showModel.find();
  res.status(200).json(allShows);
};

const addShow = async (req, res) => {
  // TODO
};

const viewShow = async (req, res) => {
  const { id } = req.params;
  const show = await showModel.findById(id);
  res.status(200).json(show);
};

const searchShow = async (req, res) => {
  // TODO
};

const updateShow = async (req, res) => {
  // TODO
};

const deleteShow = async (req, res) => {
  // TODO
};

export default {
  index,
  addShow,
  viewShow,
  searchShow,
  updateShow,
  deleteShow,
};
