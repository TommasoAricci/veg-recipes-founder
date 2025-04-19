import React from "react";
import { useContext } from "react";
import { FormContext } from "../store/Context";
import "../style/RecipesList.css";
import { Link } from "react-router-dom";

export default function RecipesList({ random }) {
  const { recipes } = useContext(FormContext);

  console.log(recipes);

  return (
    <>
      {random && (
        <div className="single-recipe">
          <Link
            to={`/recipe/${random.id}`}
            key={random.id}
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={random.image}
              className="recipe-image"
              alt={random.title}
            />
            <div className="divider"></div>
            <h1 className="recipe-title">{random.title}</h1>
          </Link>
        </div>
      )}

      {recipes &&
        recipes.map((recipe) => (
          <div className="single-recipe">
            <Link
              to={`/recipe/${recipe.id}`}
              key={recipe.id}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <img
                src={recipe.image}
                className="recipe-image"
                alt={recipe.title}
              />
              <div className="divider"></div>
              <h1 className="recipe-title">{recipe.title}</h1>
            </Link>
          </div>
        ))}
    </>
  );
}
