from bs4 import BeautifulSoup
from urllib import request
import unidecode
import json
import re


def get_role_icon(role):
    icons = {
        'tank': 'https://gamepedia.cursecdn.com/overwatch_gamepedia/d/d4/New_Tank_Icon.png?version=5e85b39d332d66f23d2e9cde8612cb36',
        'support': 'https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f7/New_Support_Icon.png?version=06a66ae8bdc767be0bef174321cce373',
        'damage': 'https://gamepedia.cursecdn.com/overwatch_gamepedia/1/1c/New_Damage_Icon.png?version=8c13d2834b3f89f1aa920785b2233c2e'
    }
    return icons[role.lower()]

def get_hero_names():
    source = request.urlopen("https://playoverwatch.com/en-us/heroes").read()
    soup = BeautifulSoup(source, features='html.parser')
    return [el.contents[0] for el in soup.find_all('span', class_='portrait-title')]

def get_hero_role(hero_name):
    pass

def normalize_name(name):
    name = re.sub(r'([^\s\w]|_)+', '', name)
    return unidecode.unidecode(name.lower().replace(' ', '-'))

def create_hero_object(hero_name):
    normalized_name = normalize_name(hero_name)
    url = "https://playoverwatch.com/en-us/heroes/" + normalized_name
    source = request.urlopen(url).read()
    soup = BeautifulSoup(source, features='html.parser')
    role = soup.find('h4', class_='hero-detail-role-name').contents[0]
    portrait = "https://d1u1mce87gyfbn.cloudfront.net/hero/" + normalized_name + "/hero-select-portrait.png"
    return {
        "name": hero_name,
        "role": role,
        "portrait": portrait,
        "roleIcon": get_role_icon(role)
    }

if __name__ == "__main__":
    names = get_hero_names()
    hero_objects = [create_hero_object(name) for name in names]
    with open('heroes.json', 'w+') as file:
        json.dump(hero_objects, file)
