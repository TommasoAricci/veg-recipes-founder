import React from "react";
import Header from "./Header";
import RecipesList from "./RecipesList";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import "../style/Random.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom } from "@fortawesome/free-solid-svg-icons";

export default function Random() {
    const [random, setRandom] = useState({});
    const [showRandom, setShowRandom] = useState(false);

    // API CALL
    const getRandom = useCallback(async () => {
        const response = await axios.get(
            "https://api.spoonacular.com/recipes/random",
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "a0872fa45d484844aa4080662132008f",
                },
                params: {
                    number: 1,
                    includeTags: "vegetarian,vegan",
                },
            }
        );
        setRandom(response.data);
        setShowRandom(true);
    }, []);

    useEffect(() => {
        if (showRandom) {
            getRandom();
        }
    }, [showRandom, getRandom]);

    return (
        <>
            <Header />
            <div className="randomTitleDiv">
                <h2 className={showRandom ? "randomTitleNull" : "randomTitle"}>
                    Don't know what to choose?
                    <br />
                    <span id="surpise"> Randomize it!</span>
                </h2>
            </div>

            {showRandom && (
                <div className="recipes-container random-recipe-div">
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
                <FontAwesomeIcon icon={faRandom} className="randomIcon" />
            </button>
        </>
    );
}
