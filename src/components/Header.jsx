import React from "react";
import "../style/Header.scss";
import image from "../images/logonature.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useCallback } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }
    const handleClose = useCallback(
        (event) => {
            if (
                isOpen &&
                !event.target.closest(".navbar-main") &&
                !event.target.closest(".navbar-open")
            ) {
                setIsOpen(false);
            }
        },
        [isOpen]
    );

    useEffect(() => {
        document.addEventListener("click", handleClose);
        return () => {
            document.removeEventListener("click", handleClose);
        };
    }, [handleClose]);

    console.log(isOpen);

    return (
        <div className="header">
            <Link to="/">
                <img src={image} className="logo" alt="" />
            </Link>
            {/*menu-laptop*/}
            <div className="menu-laptop">
            <Link to="/">
                <img src={image} className="logo-laptop" alt="" />
            </Link>
                <ul>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>About</li>
                    </Link>
                    <Link to="/recipes" style={{ textDecoration: "none" }}>
                        <li>Find a recipe</li>
                    </Link>
                    <Link to="/random" style={{ textDecoration: "none" }}>
                        <li> Get a Random Recipe</li>
                    </Link>
                </ul>
            </div>
            {/*menu-laptop*/}
            <div className="navbar-main">
                <button className="ham-button" onClick={handleClick}>
                    <FontAwesomeIcon icon={faBars} className="ham" />
                </button>
            </div>
            <div className={isOpen ? "navbar-open" : "navbar-close"}>
                <ul className="list">
                    <Link to="/">
                        <li>About</li>
                    </Link>
                    <Link to="/recipes">
                        <li>Find a recipe</li>
                    </Link>
                    <Link to="/random">
                        <li>Get a random recipe</li>
                    </Link>
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
