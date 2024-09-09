import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { FormContext } from "../store/Context";
import "../style/App.css";
import RecipesList from "./RecipesList";
import Form from "./Form";
import Header from "./Header";

export default function App() {
    // STATES AND EFFECTS //

    const [recipes, setRecipes] = useState([]);
    const [input, setInput] = useState("");
    const [query, setQuery] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (query) getRecipe();
    }, [query]);

    // API CALL //

    async function getRecipe() {
        try {
            const response = await axios.get(
                "https://api.spoonacular.com/recipes/complexSearch",
                {
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": "29e3e55c0f7e429198b68d55854e9f6e",
                    },
                    params: {
                        query: query,
                        diet: "vegetarian, vegan",
                        number: 20,
                    },
                }
            );

            setIsLoaded(true);

            if (query === "chicken" || query === "pork" || query === "beef") {
                alert("Hey, I thought you were vegetarian!");
                setIsLoaded(false);
            }
            setRecipes(response.data.results);
        } catch (error) {
            console.error("Errore nella richiesta:", error);
        }
    }

    // RENDER //

    return (
        <FormContext.Provider
            value={{
                recipes,
                query,
                setQuery,
                input,
                setInput,
                isLoaded,
                setIsLoaded,
                getRecipe,
            }}
        >
            <Header />
            <Form />
            <div className="recipes-container">
                <RecipesList />
            </div>
        </FormContext.Provider>
    );
}
