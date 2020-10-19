import React from 'react';
import './styles.sass';
import coolSpots from "./cool-spots.png";
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
                    <div className="text-project">Wedding Website</div>
                    <div className="url">Website URL: <a href="http://onemoryeo.com/">onemoryeo.com</a></div>
                    <div className="github-projects">GitHub: <a href="https://github.com/annamikmorozova/WeddingWebsite">@annamikmorozova/WeddingWebsite</a></div>
                    <ul className="main-body-projects">
                        <li>Designed a wedding website for own wedding.</li>
                        <li>Generated embedded Google Maps locations and connected registry URLs.</li>
                        <li>Created an ability for a guest to submit a picture and a song.</li>
                        <li>Developed with PERN stack, Sequelize.js, PostgreSQL, Redux, React-Bootstrap, React-Icons, Heroku.</li>
                    </ul>
                </div>

                <div className="col">
                    <img className="project-img" src={footballBlog} alt="FootballBlog"/>
                    <div className="text-project">MKM Football Blog</div>
                    <p className="url">Website URL: <a href="https://football-blog.herokuapp.com/posts">football-blog.herokuapp.com/posts</a></p>
                    <p className="github-projects">GitHub: <a href="https://github.com/annamikmorozova/football-blog">@annamikmorozova/football-blog</a></p>
                    <ul className="main-body-projects">
                        <li>A blog site of a professional soccer player.</li>
                        <li>Implement with Facebook API for posts’ comments and user reactions.</li>
                        <li>Utilize OAuth to sign in with an admin logging-in experience.</li>
                        <li>Allowed for an admin to create, update, and make a new post including tags and images</li>
                        <li>Created a "sort by a tag" option for users to view posts and images.</li>
                        <li>Develop with PERN stack, Sequelize.js, PostgreSQL, Redux, Bootstrap, Heroku.</li>
                    </ul>
                </div>

                <div className="col">
                    <img className="project-img" src={devProz} alt="WhatDoYouMeme"/>
                    <div className="text-project">Virtual What Do You Meme Card Game</div>
                    <p className="url">Website URL: <a href="https://devproz.herokuapp.com/">devproz.herokuapp.com</a></p>
                    <p className="github-projects">GitHub: <a href="https://github.com/DevProz/DevProz/">@DevProz/DevProz</a></p>
                    <ul className="main-body-projects">
                        <li>Real-time multiplayer virtual version of the classic card game.</li>
                        <li>Designed entire game to keep clients in sync with server via Socket.io.</li>
                        <li>Maintained a high standard for git history and code style in a four person team.</li>
                        <li>Developed with MERN stack, Redux, Socket.io, Bootstrap, jQuery, Heroku.</li>
                    </ul>
                </div>

                <div className="col">
                    <img className="project-img" src={coolSpots} alt="CoolSpots"/>
                   <div className="text-project">Cool-Spots</div>
                    <p className="github-projects">GitHub: <a href="https://github.com/annamikmorozova/CoolSpots">@annamikmorozova/CollSpots</a></p>
                    <ul className="main-body-projects">
                        <li>Social platform to share your favorite places with your friends and see their places on the same map.</li>
                        <li>Developed with MERN stack, Redux, Create-React-App, Bootstrap, Google Maps JavaScript API.</li>
                    </ul>
                </div>

                <div className="col">
                    <img className="project-img" src={pandemic} alt="Pandemic"/>
                    <div className="text-project">Pandemic-Essentials</div>
                    <p className="url">Website URL: <a href="https://github.com/2004-GraceShopperProject-NY/GraceShopper">@2004-GraceShopperProject-NY/GraceShopper</a></p>
                    <p className="github-projects">GitHub: <a href="https://pandemic-essentials.herokuapp.com/">pandemic-essentials.herokuapp.com</a></p>
                    <ul className="main-body-projects">
                        <li>Ecommerce site providing products that will help those who have been affected by a pandemic.</li>
                        <li>Initialized and seeded a database of 100 users and 25 products with faker.</li>
                        <li>Built guest, user, and admin logging-in experience and incorporated LocalStorage.</li>
                        <li>Developed with PERN stack, Sequelize.js, PostgreSQL, Redux, React-Bootstrap, Mocha, Enzyme, Heroku.</li>
                    </ul>
                </div>
                
            </div>
        )
    }
}