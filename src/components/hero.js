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
            <img src={this.state["img-url"]}/>
        );
    }

}