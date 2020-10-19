import React from 'react';
import './styles.sass';
import {BiLeftArrow, BiRightArrow} from "react-icons/bi"

export default class Events extends React.Component {
    constructor() {
        super()
        this.state = {
            order: 0,
            events: [
                {   
                    name: "WinterBattle",
                    url: "/static/media/event1.68e92c33.jpg",
                    alt: "WinterBattle"
                }, {
                    name: "NewYear",
                    url: "/static/media/event2.1405b10c.jpg",
                    alt: "NewYear"
                }, {
                    name: "ValentinesDay",
                    url: "/static/media/event3.f9e46683.jpg",
                    alt: "ValentinesDay"
                }, {
                    name: "MarchMadness",
                    url: "/static/media/event4.c2e25d63.jpg",
                    alt: "MarchMadness"
                }, {
                    name: "TurkeyBall",
                    url: "/static/media/event5.06d3ab39.jpg",
                    alt: "TurkeyBall"
                }, {
                    name: "FoodDonations",
                    url: "/static/media/event6.f736b2e1.jpg",
                    alt: "FoodDonations"
                }
            ]
        }
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    };

    handlePrev() {
        this.setState({
            order: this.state.order - 1
        });
    };

    handleNext() {
        this.setState({
            order: this.state.order + 1
        });
    };

    render() {
        return (
            <div>
                <h1>Events</h1>
                <div className="arrows">
                    <button onClick={this.handlePrev} disabled={this.state.order === 0} type="button" className="arrow-left"><BiLeftArrow size={32} /></button>
                    <button onClick={this.handleNext} disabled={this.state.order === 5} type="button" className="arrow-left"><BiRightArrow size={32} /></button>
                </div> 
                <div className="col">
                    <img className="publication-img" src={this.state.events[this.state.order].url} alt={this.state.events[0].alt}/>
                </div>
            </div>
        );
    }
}