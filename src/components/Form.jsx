import React from "react";
import { useContext } from "react";
import { FormContext } from "../store/Context";
import "../style/Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";

export default function Form() {
    const { input, setInput, setQuery, isLoaded } = useContext(FormContext);

    function handleChange(event) {
        setInput(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setQuery(input);
        setInput("");
    }

    return (
            <div
                className={
                    isLoaded ? "search-bar search-bar-top" : "search-bar"
                }
            >
                <h1 className="form-title">Ready to get healthy ?</h1>
                <h2>Type your favourite dish or food and find the best recipe for you</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        onChange={handleChange}
                        className="input"
                        type="text"
                    />
                    <button className="button">
                        <FontAwesomeIcon
                            icon={faCarrot}
                            className="carrot-icon"
                        />
                    </button>
                </form>
            </div>
    );
}
;
