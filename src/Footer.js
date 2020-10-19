import React from "react";
import {SiGithub} from "react-icons/si";

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="created-by">
                    Created by Anna Morozova
                </div>
                <div className="github">
                    <a className="g-link" href="https://github.com/annamikmorozova/NewPortfolio" rel="noopener noreferrer" target="_blank"><SiGithub color="black" size={22}/></a>
                </div>
            </div>
        )
    }
}