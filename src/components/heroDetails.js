import React, { useState } from 'react';

const HeroDetails = (props) => {

    return (
        <div className='dark-overlay'>
            <div className='hero-details'>
                <div className='close-button'>
                    <svg width='100' height='100' onClick={props.onClose}>
                        <circle cx='50' cy='50' r='10' fill='red'/>
                    </svg>
                </div>
                <h1>{props.hero.name}</h1>
            </div>
        </div>
    );

};

export default HeroDetails;