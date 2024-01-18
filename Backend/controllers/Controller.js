const Model = require("../models/Model");
const getall = async (req, res) => {
  const posts = await Model.find();
  res.send(posts);
};
const getById = async (req, res) => {
  const posts = await Model.findOne({ id: req.params.id });
  res.send(posts);
};
const deleteOne = async (req, res) => {
  await Model.deleteOne({ id: req.params.id });
  res.status(204).send();
};
const postNew = async (req, res) => {
  const newProd = await Model(req.body);
  await newProd.save();
  res.send(newProd);
};
module.exports = { getall, getById, deleteOne, postNew };
