import React from "react";
import Header from "./Header";
import RecipesList from "./RecipesList";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import "../style/Random.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";

export default function Random() {
    const [random, setRandom] = useState({});
    const [showRandom, setShowRandom] = useState(false);
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiRandomUrl = process.env.REACT_APP_RANDOM_API_URL;

    // API CALL
    const getRandom = useCallback(async () => {
        const response = await axios.get(
            apiRandomUrl,
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": apiKey,
                },
                params: {
                    number: 1,
                    includeTags: "vegetarian,vegan",
                },
            }
        );
        setRandom(response.data);
        setShowRandom(true);
    }, [apiRandomUrl, apiKey]);

    useEffect(() => {
        if (showRandom) {
            getRandom();
        }
    }, [showRandom, getRandom]);

    return (
        <>
            <Helmet>
                <title>Get a Random Recipe</title>
            </Helmet>
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
