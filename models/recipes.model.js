import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    level: {
      type: String,
      enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"],
      default: "Easy Peasy",
    },
    ingredients: [{ type: String }],
    cuisine: {
      type: String,
      required: true,
      lowercase: true,
    },
    dishType: {
      type: String,
      enum: [
        "breakfast",
        "main_course",
        "soup",
        "snack",
        "drink",
        "dessert",
        "other",
      ],
      default: "Easy Peasy",
    },
    image: {
      type: String,
      default: "https://images.media-allrecipes.com/images/75131.jpg",
    },
    duration: {
      type: Number,
      min: 0,
    },
    creator: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const recipesModel = model("Recipe", userSchema);

export default recipesModel;
