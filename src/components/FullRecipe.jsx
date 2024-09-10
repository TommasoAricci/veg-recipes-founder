import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../style/FullRecipe.css";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function FullRecipe() {
    // STATES AND EFFECTS //

    const { id } = useParams();

    const [info, setInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [fullSummary, setFullSummary] = useState(false);
    const [isChecked, setIsChecked] = useState({});

    useEffect(() => {
        if (id) getInfo(id);
    }, [id]);

    // API CALL //

    async function getInfo(id) {
        const response = await axios.get(
            `https://api.spoonacular.com/recipes/${id}/information`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "a0872fa45d484844aa4080662132008f",
                },
            }
        );
        setInfo(response.data);
        setIsLoading(false);
    }

    console.log(info);

    if (isLoading) {
        return (
            <div className="spinner">
                <FontAwesomeIcon icon={faSpinner} className="spinner-icon"spin />
            </div>
        );
    }

    // FUNCTIONS //

    function toggleSummary() {
        setFullSummary(!fullSummary);
    }

    function toggleCheckbox(index) {
        setIsChecked({
            ...isChecked,
            [index]: !isChecked[index], // Inverti il valore specifico per l'indice
        });
    }

    // RENDER //

    return (
        <>
            <div id="header">
                <Header />
            </div>
            <a href="#header">
                <button className="button up">⬆</button>
            </a>
            <div className="full-recipe" id="full-recipe">
                {/*
            <a href="#full-recipe">
                <button className="button back" onClick={goBack}>⬅</button>
            </a>*/}
                <h1 id="title">{info.title}</h1>
                <img src={info.image} alt={info.title} />
                <div className="diet">
                    <p>
                        {info.diets.map((diet, index) => (
                            <span key={index}>{diet}</span>
                        ))}
                    </p>
                </div>
                <div className="servings">
                    <p className="servings-text">
                        Servings: {info.servings} - Ready in{" "}
                        {info.readyInMinutes}
                        minutes
                    </p>
                </div>
                <div className="index">
                    <ol>
                        <li>
                            <a href="#summary">Summary</a>
                        </li>
                        <li>
                            <a href="#ingredients">Ingredients</a>
                        </li>
                        <li>
                            <a href="#instructions">Instructions</a>
                        </li>
                    </ol>
                </div>
                <h2>About this recipe:</h2>
                <div className="summary" id="summary">
                    <p>
                        {fullSummary
                            ? info.summary
                            : info.summary.substring(0, 400)}
                        ...
                    </p>
                    <button className="button" onClick={toggleSummary}>
                        {fullSummary ? "Read Less" : "Read More"}
                    </button>
                </div>
                <h2>Ingredients</h2>
                <div className="ingredients" id="ingredients">
                    <ul className="ingredient-list">
                        {info.extendedIngredients.map((ingredient, index) => (
                            <div className="checking" key={index}>
                                <input
                                    type="checkbox"
                                    checked={isChecked[index] || false}
                                    onChange={() => toggleCheckbox(index)}
                                />
                                <li
                                    className={
                                        isChecked[index]
                                            ? "unchecked"
                                            : "checked"
                                    }
                                >
                                    {ingredient.original}
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>
                <h2>Instructions</h2>
                <div className="instructions" id="instructions">
                    <ol>
                        {info.analyzedInstructions[0].steps.map((step) => (
                            <li>{step.step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    );
}
