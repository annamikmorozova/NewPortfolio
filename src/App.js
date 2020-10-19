import React from 'react';
import './styles.sass';
import me from "./for-first-page.jpg";

export default class App extends React.Component {
  constructor() {
    super();
      this.handleEducation = this.handleEducation.bind(this);
      this.handleSkills = this.handleSkills.bind(this);
      this.handleCertifications = this.handleCertifications.bind(this);
  }

  handleEducation(event){
    event.preventDefault();
    const education = document.getElementById("education")
    if (education.style.display === "block"){
      education.style.display = "none"
    } else {
      education.style.display = "block"
    }
  }

  handleSkills(event){
    event.preventDefault();
    const skills = document.getElementById("skills")
    if (skills.style.display === "block"){
      skills.style.display = "none"
    } else {
      skills.style.display = "block"
    }
  }

  handleCertifications(event) {
    event.preventDefault();
    const cert = document.getElementById("cert")
    if (cert.style.display === "block"){
      cert.style.display = "none"
    } else {
      cert.style.display = "block"
    }
  }

  render() {

    return (
        <div className="App">
          
          <div className="buttons">
            <button className="btn btn-style" onClick={this.handleEducation} data-toggle="collapse" type="button" aria-expanded="false" aria-controls="education">
              Education
            </button>

            <button className="btn btn-style" type="button" onClick={this.handleSkills} data-toggle="collapse" aria-expanded="false" aria-controls="skills">
              Skills
            </button>

            <button className="btn btn-style" type="button" onClick={this.handleCertifications} data-toggle="collapse" aria-expanded="false" aria-controls="cert">
              Certifications
            </button>
          </div>

          <div className="collapse" id="education" >
            <div className="card card-body card-style">
              <ul className="card-align">
                <li >The Grace Hopper Program at Fullstack Academy'20</li>
                <li> MS in International Communication, St. John's University'19</li>
                <li>BS in Advertising Communication, St. John's University'17</li>
              </ul>
            </div>
          </div>

          <div className="collapse" id="skills">
            <div className="card card-body card-style">
              <ul className="card-align">
                <li>
                    Proficient: JavaScript, Node.js, Express.js, React, Redux, 
                    REST APIs Sequelize.js, PostgreSQL, MongoDB, Mongoose, Socket.io, 
                    HTML, CSS, SASS, Bootstrap, Heroku
                </li>
                <li>
                    Knowledgeable: Git, Jasmine, Mocha, Chai, Istanbul, OAuth, EJS
                </li>
                <li>
                    Familiar: AWS, TypeScript, Python, Jest, Enzyme, D3.js, Docker
                </li>
              </ul>
            </div>
          </div>

          <div className="collapse" id="cert">
            <div className="card card-body card-style">
              <ul className="card-align">
                <li>Google Cloud: Introduction to Docker'20</li>
                <li>Udemy: Learning Shell Scripting: How to Automate Your Tasks'20</li>
                <li>HackeRank: React.js'20</li>
                <li>HackeRank: JavaScript'20</li>
                <li>HackeRank: Problem Solving'20</li>
                <li>St. John's University: Certification of Excellence'19</li>
                <li>St. John's University: Certification of Professional Development'19</li>
                <li>ICSB: Global Certificate Program, Creativity and Innovation'18</li>
                <li>National Institute of Health: Protecting Human Research Participants'17</li>
              </ul>
            </div>
          </div>

          <header className="App-header">
            <h1>
              Anna Morozova
            </h1>
            <h2>
              I am a girl (She/her/hers),
            </h2>
            <h2>
            a Software Engineer specializing in Full Stack Development,
            </h2>
            <h2>
              a former professional and Division 1 athlete,
            </h2>
            <h2>
              a published author,
            </h2>
            <h2>
              And a human!
            </h2>
            <div className="me-div">
              <img src={me} className="img-me" alt="me" />
            </div>
          </header>
        </div>
    );
  }
}
