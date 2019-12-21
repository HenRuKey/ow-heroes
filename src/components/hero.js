import React, { Component, useState } from 'react';
import { useSpring, useTransition, animated } from 'react-spring';

const Hero = (props) => {
    const [isFocused, setFocus] = useState(false);

    const swipe = useSpring({ 
        from: {
            opacity: 0
        },
        opacity: 1,
        boxShadow: isFocused ? '10px 10px rgba(0, 0, 0, 0.6)' : '0px 0px rgba(0, 0, 0, 0)'
     });

     const active = useTransition(props.isActive, null, {
        from: {
            transform: 'translate3d(-1000%, -1000%, 0)', position: 'absolute'
        },
        enter: {
            transform: 'translate3d(0, 0, 0)', position: 'relative'
        },
        leave: {
            transform: 'translate3d(-1000%, -1000%, 0)', position: 'absolute',
        }
     });

     return (
        active.map(({item, key, props:styling}) => 
            item &&         
            <HeroCard
                className='hero-card' 
                style={{...swipe, ...styling}}
                onMouseOver={() => setFocus(true)} 
                onMouseOut={() => setFocus(false)}>
                <img src={props.portrait}/>
                <div>{props.name}</div>
                <img className='role-icon' src={props.roleIcon}/>
            </HeroCard> 
        )
    );

};

const HeroCard = animated.div;

export default Hero;