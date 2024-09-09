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
                        <h1 className="recipe-title">{random.title}</h1>
                        <div className="divider"></div>
                        <img
                            src={random.image}
                            className="recipe-image"
                            alt={random.title}
                        />
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
                            <h1 className="recipe-title">{recipe.title}</h1>
                            <div className="divider"></div>
                            <img
                                src={recipe.image}
                                className="recipe-image"
                                alt={recipe.title}
                            />
                        </Link>
                    </div>
                ))}
        </>
    );
}
