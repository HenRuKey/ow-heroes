import React, { useState } from 'react';
import Hero from './hero';
import HeroDetails from './heroDetails';
import { getAllHeroes, Roles } from '../lib/heroData';
import { useTransition, animated } from 'react-spring';

const HeroGallery = () => {
    const heroes = getAllHeroes();
    const tanks = heroes.filter(hero => hero.role === Roles.TANK);
    const damage = heroes.filter(hero => hero.role === Roles.DAMAGE);
    const support = heroes.filter(hero => hero.role === Roles.SUPPORT);

    const [activeHeroes, setActiveHeroes] = useState(heroes);
    const [isDetailsOpen, setDetailsOpen] = useState(false);
    const [focusedHero, setFocusedHero] = useState();

    const heroClickHandler = (heroName) => {
        let hero = heroes.filter(hero => hero.name === heroName)[0];
        setFocusedHero(hero);
        setDetailsOpen(true);
    };

    const detailsClosedHandler = () => {
        setDetailsOpen(false);
        setFocusedHero(null);
    };

    return ( 
        <> 
        <div className="roles">
            <a 
                className="role" 
                onClick={() => {
                    setActiveHeroes(heroes);
                }}>
                <span className="text">All</span>
            </a>
            <a 
                className="role" 
                onClick={() => {
                    setActiveHeroes(tanks)
                }}>
                {/* Icons taken from https://playoverwatch.com/en-us/heroes/ */}
                <svg className="icon" viewBox="0 0 32 32" role="presentation">
                    <title>Tank</title>
                    <path
                        d="M29,10.7c0,2.1,0,4.1,0,6.2c0,0.6-0.1,1.1-0.4,1.6c-2.9,5.3-6.8,9.7-11.8,13.2c-0.6,0.4-1,0.4-1.6,0
                        c-4.9-3.4-8.8-7.8-11.7-13c-0.3-0.6-0.4-1.2-0.4-1.8c0-3.9,0.1-7.8,0-11.7C3,2.3,5.2,1.9,7.1,1.4C10.4,0.6,13.3,0,16.6,0
                        c3.1,0,7.7,1.1,9.4,1.6c1.3,0.4,2.7,0.9,2.9,2.2C29,4.9,28.9,6,29,7.1C29,8.3,29,9.5,29,10.7C29,10.7,29,10.7,29,10.7z">
                    </path>
                </svg>
                <span className="text">Tank</span>
            </a>
            <a 
                className="role" 
                onClick={() => {
                    setActiveHeroes(damage)
                }}>
                <svg className="icon" viewBox="0 0 32 32" role="presentation">
                    <title>Damage</title>
                    <g>
                    <rect x="2.1" y="28.1" width="7.1" height="3.9"></rect>
                    <path
                        d="M9.1,7c0,0,0-0.5,0-0.7C8.6,1.5,5.6,0,5.6,0s-3,1.5-3.5,6.3c0,0.2,0,0.7,0,0.7v18.4h3.5h3.5V7z"></path>
                    </g>
                    <g>
                        <rect x="12.5" y="28.1" width="7.1" height="3.9"></rect>
                        <path
                            d="M19.5,7c0,0,0-0.5,0-0.7C19,1.5,16,0,16,0s-3,1.5-3.5,6.3c0,0.2,0,0.7,0,0.7v18.4H16h3.5V7z"></path>
                    </g>
                    <g>
                        <rect x="22.9" y="28.1" width="7.1" height="3.9"></rect>
                        <path
                            d="M29.9,7c0,0,0-0.5,0-0.7C29.4,1.5,26.4,0,26.4,0s-3,1.5-3.5,6.3c0,0.2,0,0.7,0,0.7v18.4h3.5h3.5V7z"></path>
                    </g>
                </svg>
                <span className="text">Damage</span>
            </a>
            <a 
                className="role" 
                onClick={() => {
                    setActiveHeroes(support)
                }}>
                <svg className="icon" viewBox="0 0 32 32" role="presentation">
                    <title>Support</title>
                    <path
                        fill-rule="evenodd"
                        d="M29.3,10.2h-7.5V2.7c0-1.5-1.2-2.7-2.7-2.7h-6.3c-1.5,0-2.7,1.2-2.7,2.7v7.5H2.7
                        c-1.5,0-2.7,1.2-2.7,2.7v6.3c0,1.5,1.2,2.7,2.7,2.7h7.5v7.5c0,1.5,1.2,2.7,2.7,2.7h6.3c1.5,0,2.7-1.2,2.7-2.7v-7.5h7.5
                        c1.5,0,2.7-1.2,2.7-2.7v-6.3C32,11.4,30.8,10.2,29.3,10.2z">
                    </path>
                </svg>
                <span className="text">Support</span>
            </a>
        </div> 
        <div className = 'hero-gallery'>
            {
                heroes.map((hero, index) => {
                    return (
                        <HeroCard
                            name={hero.name}
                            portrait={hero.portrait}
                            roleIcon={hero.roleIcon}
                            isActive={activeHeroes.includes(hero)}
                            onClick={heroClickHandler}
                            key={index}
                        />
                    )
                })
            }
        </div>

        {
            isDetailsOpen && focusedHero &&
            <HeroDetails
                onClose={detailsClosedHandler}
                hero={focusedHero}
            />
        }
        </>
    );
};

const HeroCard = animated(Hero);

export default HeroGallery;