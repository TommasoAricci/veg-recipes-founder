import React from "react";
import Header from "./Header";
import "../style/About.scss";
import image from "../images/logonature.png";
import team from "../images/team-copia.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function About() {
    return (
        <>
            <Helmet>
                <title>The Green Way - About</title>
            </Helmet>
            <Header />
            <div className="about">
                <div className="about-div">
                    <h1>
                        Welcome to <br />
                        <span className="about-green">The Green Way</span>
                    </h1>
                    <h2>
                        The best recipes-founder suitable for vegetarians and
                        vegans as well.
                    </h2>
                    <div className="divider about-divider"></div>
                    <div className="info-div">
                        <FontAwesomeIcon
                            icon={faPeopleGroup}
                            className="info-icon"
                            size="2x"
                        />{" "}
                        <h3>Who are we?</h3>
                    </div>
                    <img
                        src={team}
                        className="team-image"
                        alt="veggie food"
                        width={200}
                    />
                    <h2>
                        The Green Way was founded in 2022 by two young people, a
                        chef and a naturopath. Now, after two years the team has
                        grown to seven people who constantly strive to improve
                        their recipes.
                        <br />
                        <br />
                    </h2>
                    <div className="divider about-divider"></div>
                    <div className="info-div">
                        <FontAwesomeIcon
                            icon={faLightbulb}
                            className="info-icon"
                            size="2x"
                        />{" "}
                        <h3>Why The Green Way?</h3>
                        <img
                            src={image}
                            className="about-image"
                            alt="veggie food"
                            width={250}
                        />
                        <h2>
                            We believe that everyone should have access to a{" "}
                            <span>healthy living</span> <br />
                            <br />
                            Our goal is to help you to find the best recipe for
                            your vegeterian or vegan diet in order to encourage
                            the <span>self-care of the body and mind.</span>
                        </h2>
                    </div>

                    <div className="divider about-divider"></div>
                    <Link
                        to="/recipes"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <button className="about-button">
                            <div className="info-div">
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="button-icon"
                                    size="2x"
                                />{" "}
                                <h2>Find a recipe by word</h2>
                            </div>
                        </button>
                    </Link>

                    <div className="divider about-divider"></div>
                    <Link
                        to="/random"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <button className="about-button">
                            <div className="info-div">
                                <FontAwesomeIcon
                                    icon={faShuffle}
                                    className="button-icon"
                                    size="2x"
                                />{" "}
                                <h2>Find a random recipe</h2>
                            </div>
                        </button>
                    </Link>
                    <div className="divider about-divider"></div>
                </div>
            </div>
        </>
    );
}
