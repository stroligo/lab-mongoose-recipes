import express from "express";
const recipesRoute = express.Router();

import recipeModel from "../models/recipes.model.js";

recipesRoute.get("/", async (req, res) => {
  try {
    return res.status(200).json({ msg: "Servidor em funcionamento" });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.errors);
  }
});

export default recipesRoute;
