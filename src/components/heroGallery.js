import React, { Component } from 'react';
import Hero from './hero';
import { getHeroNames } from '../lib/heroData';

export default class HeroGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            heroes: []
        };
    }

    componentDidMount() {
        getHeroNames().then(names => {
            this.setState({ heroes: names });
        });
    }

    render() {
        return (
            <div class='hero-gallery'>
                {this.state.heroes.map((name, index) => {
                    return <Hero name={name} key={index}/>
                })}
            </div>
        );
    }

}