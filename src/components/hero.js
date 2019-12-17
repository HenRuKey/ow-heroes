import React, { Component } from 'react';
import { getHeroImageUrl, getHeroNames } from '../lib/heroData';

export default class Hero extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "img-url": getHeroImageUrl(this.props.name)
        };
    }

    render() {
        return (
            <div className='hero-card'>
                <img src={this.state["img-url"]}/>
                <div>{this.props.name}</div>
            </div>
        );
    }

}