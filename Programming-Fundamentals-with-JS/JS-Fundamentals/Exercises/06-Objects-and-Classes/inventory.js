function inventory(input) {
    const heroes = [];

    for (const hero of input) {
        let [name, level, items] = hero.split(' / ');
        level = Number(level);

        heroes.push({
            name,
            level,
            items
        });
    }

    heroes
        .sort((a, b) => a.level - b.level)
        .forEach(hero => {
            console.log(`Hero: ${hero.name}\n` +
                `level => ${hero.level}\n` +
                `items => ${hero.items}`)
        });
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara']);