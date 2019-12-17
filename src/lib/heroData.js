import cheerio from 'cheerio';
import request from 'request';

/**
 * Generates a url to the image of the given hero.
 * @param {string} heroName the name of the hero.
 * @return {string} the url.
 */
export const getHeroImageUrl = (heroName) => {
    let name = normalizeHeroName(heroName);
    return `https://d1u1mce87gyfbn.cloudfront.net/hero/${name}/icon-portrait.png`;
};

/**
 * Retrieves a list of all Overwatch hero names.
 * @return {Promise} Promise object represents the array of hero names as strings.
 */
export const getHeroNames = () => {
    let heroes = [];
    const url = 'https://cors-anywhere.herokuapp.com/https://playoverwatch.com/en-us/heroes';
    return new Promise((resolve, reject) => { request(url, (error, response, html) => {
        if (!error && response.statusCode == 200) {
            const heroPage = cheerio.load(html);
            heroPage('.hero-portrait-detailed').each((index, element) => {
                let heroName = heroPage(element).find('.portrait-title').text();
                heroes.push(heroName);
            });
            resolve(heroes);
        }
        else {
            reject(error);
        }
    })});
};

/**
 * Normalizes hero names for urls and api calls.
 * @param {string} name the hero's name.
 * @return {string} the normalized name.
 */
const normalizeHeroName = (name) => {
    return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace('.', '').replace(/[\W_]+/g,"-");
}