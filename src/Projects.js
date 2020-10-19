import React from 'react';
import './styles.sass';
import coolSpots from "./cool-spots.png";
import guessingGame from "./guessing-game.png";
import weddingWebsite from "./wedding-website.png";
import devProz from "./devproz.png";
import pandemic from "./pandemic-essentials.png";
import footballBlog from "./football-blog.png";

export default class Projects extends React.Component {
    render() {
        return (
            <div className="container-projects">
                <h1>
                    Projects
                </h1>
                <div className="col">
                    <img className="project-img" src={weddingWebsite} alt="WeddingWebsite"/>
                    <div className="text-project">TEXT</div>
                </div>
                <div className="col">
                    <img className="project-img" src={footballBlog} alt="FootballBlog"/>
                    <div className="text-project">TEXT</div>
                </div>
                <div className="col">
                    <img className="project-img" src={devProz} alt="WhatDoYouMeme"/>
                    <div className="text-project">TEXT</div>
                </div>
                <div className="col">
                    <img className="project-img" src={coolSpots} alt="CoolSpots"/>
                    <div className="text-project">TEXT</div>
                </div>
                <div className="col">
                    <img className="project-img" src={pandemic} alt="Pandemic"/>
                    <div className="text-project">TEXT</div>
                </div>
                <div className="col">
                    <img className="project-img" src={guessingGame} alt="GuessingGame"/>
                    <div className="text-project">TEXT</div>
                </div>
            </div>
        )
    }
}