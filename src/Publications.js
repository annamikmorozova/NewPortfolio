import React from 'react';
import './styles.sass';
import {BiLeftArrow, BiRightArrow} from "react-icons/bi"

export default class Publications extends React.Component {
    constructor() {
        super();
        this.state = {
            order: 0,
            articles: [
                {   
                    name: "TestCoverage",
                    url: "/static/media/test-coverage.a5cf8d1e.png",
                    alt: "TestCoverage"
                },
                {   
                    name: "BinarySearch",
                    url: "/static/media/binary-search.f1ba1cd2.png",
                    alt: "BinarySearch"
                },
                {   
                    name: "JoVSA",
                    url: "/static/media/article1.0612a91d.png",
                    alt: "JoVSA"
                },
                {   
                    name: "Spashion",
                    url: "/static/media/article2.00fa3f52.png",
                    alt: "Spashion"
                }
            ]
        };
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
                <h1>
                    Publications
                </h1>
                <div className="arrows">
                    <button onClick={this.handlePrev} disabled={this.state.order === 0} type="button" className="arrow-left"><BiLeftArrow size={32} /></button>
                    <button onClick={this.handleNext} disabled={this.state.order === 3} type="button" className="arrow-left"><BiRightArrow size={32} /></button>
                </div> 
                <div className="col">
                    <img className="publication-img" src={this.state.articles[this.state.order].url} alt={this.state.articles[0].alt}/>
                </div>
            </div>
        );
    }
};