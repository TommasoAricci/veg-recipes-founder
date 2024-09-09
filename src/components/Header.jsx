import React from "react";
import "../style/Header.css";
import image from "../images/logonature.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    function handleClose(event) {
        if (
            isOpen &&
            !event.target.closest(".navbar-main") &&
            !event.target.closest(".navbar-open")
        ) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClose);
        return () => {
            document.removeEventListener("click", handleClose);
        };
    }, [isOpen]);

    console.log(isOpen);

    return (
        <div className="header">
            {/*menu-laptop*/}
            <div className="menu-laptop">
                <Link to="/">
                    <button>About</button>
                </Link>
                <Link to="/recipes">
                    <button>Find a recipe</button>
                </Link>
                <Link to="/random">
                    <button> Get a Random Recipe</button>
                </Link>
            </div>
            {/*menu-laptop*/}
            <Link to="/">
                <img src={image} className="logo" alt="" />
            </Link>
            <div className="navbar-main">
                <button className="ham-button">
                    <FontAwesomeIcon
                        icon={faBars}
                        className="ham"
                        onClick={handleClick}
                    />
                </button>
            </div>
            <div className={isOpen ? "navbar-open" : "navbar-close"}>
                <ul className="list">
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/recipes">Find a recipe</Link>
                    </li>
                    <li>
                        <Link to="/random">Get a Random Recipe</Link>
                    </li>
                </ul>
                <button
                    onClick={handleClick}
                    className="ham-button closing-button"
                >
                    <FontAwesomeIcon icon={faXmark} className="close" />
                </button>
            </div>
        </div>
    );
}
