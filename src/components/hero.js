import React, { Component, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Hero = (props) => {
    const [isFocused, setFocus] = useState(false);

    const swipe = useSpring({ 
        from: {
            transform: 'translate3d(-50px, -50px, 0)',
            opacity: 0
        },
        transform: isFocused ? 'translate3d(-5px, -5px, 0)' : 'translate3d(0, 0, 0)',
        opacity: 1,
        boxShadow: isFocused ? '10px 10px rgba(0, 0, 0, 0.6)' : '0px 0px rgba(0, 0, 0, 0)'
     });
     
     return (
        <HeroCard
            className='hero-card' 
            style={swipe} 
            onMouseOver={() => setFocus(true)} 
            onMouseOut={() => setFocus(false)}>
            <img src={props.portrait}/>
            <div>{props.name}</div>
            <img className='role-icon' src={props.roleIcon}/>
        </HeroCard> 
    );

};

const HeroCard = animated.div;

export default Hero;