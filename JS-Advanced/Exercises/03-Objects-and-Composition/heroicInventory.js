function heroicInventory(arr) {
  const heroes = [];

  for (const data of arr) {
    let [name, level, items] = data.split(' / ');
    level = Number(level);
    items = items ? items.split(', ') : [];

    heroes.push({ name, level, items });
  }

  return JSON.stringify(heroes);
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara']));
console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));