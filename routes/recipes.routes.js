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

// CREATE USER - MONGODB
recipesRoute.post("/create-recipe", async (req, res) => {
  try {
    const form = req.body;

    //quer criar um documento dentro da sua collection -> .create()
    const newRecipe = await recipeModel.create(form);

    return res.status(201).json(newRecipe);
  } catch (error) {
    console.log(error.errors);
    return res.status(500).json(error.errors);
  }
});

//R - READ - MONGODB
recipesRoute.get("/all-recipes", async (req, res) => {
  try {
    const recipes = await recipeModel
      .find({}, { __v: 0, updatedAt: 0 })
      .sort({
        title: 1,
      })
      .limit(100);

    return res.status(200).json(recipes);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.errors);
  }
});

//D - Delete - MONGODB
recipesRoute.delete("/del-recipe/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRecipe = await recipeModel.findByIdAndDelete(id);

    if (!deletedRecipe) {
      return res.status(400).json({ msg: "Usuário não encontrado" });
    }

    return res.status(200).json(deletedRecipe);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.errors);
  }
});

//U - UPDATE - PUT - MONGODB
recipesRoute.put("/edit-recipe/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const selectedRecipe = await recipeModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true, runValidators: true }
    );

    return res.status(200).json(selectedRecipe);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.errors);
  }
});

export default recipesRoute;
