import heroes from '../data/heroes.json'

export const getAllHeroes = () => {
    return heroes;
}

export const Roles = {
    ALL: 'All',
    SUPPORT: 'Support',
    DAMAGE: 'Damage',
    TANK: 'Tank'
};