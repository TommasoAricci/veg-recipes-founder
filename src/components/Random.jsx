import React from "react";
import Header from "./Header";
import RecipesList from "./RecipesList";
import axios from "axios";
import { useState, useEffect } from "react";
import "../style/Random.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom } from "@fortawesome/free-solid-svg-icons";

export default function Random() {
    const [random, setRandom] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [showRandom, setShowRandom] = useState(false);

    useEffect(() => {
        if (random && showRandom) getRandom();
    }, []);

    // API CALL
    async function getRandom() {
        const response = await axios.get(
            "https://api.spoonacular.com/recipes/random",
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "29e3e55c0f7e429198b68d55854e9f6e",
                },
                params: {
                    number: 1,
                    includeTags: "vegetarian,vegan",
                },
            }
        );
        setRandom(response.data);
        setIsLoading(false);
        setShowRandom(true);
        console.log(random);
    }

    return (
        <>
            <Header />
            <div className="randomTitleDiv">
                <h2 className={showRandom ? "randomTitleNull" : "randomTitle"}>
                    Don't know what to choose?
                    <br />
                    <span>Randomize it!</span>
                </h2>
            </div>

            {showRandom && (
                <div className="recipes-container">
                    <RecipesList random={random.recipes[0]} />
                </div>
            )}
            <button
                onClick={getRandom}
                className={
                    showRandom
                        ? "randomButtonThen button"
                        : "randomButtonBefore button"
                }
            >
                <FontAwesomeIcon icon={faRandom} />
            </button>
        </>
    );
}
