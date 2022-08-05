function heroesOfCodeAndLogicVII(input = []) {
  const numberOfHeroes = Number(input.shift());
  const heroes = {};

  const commands = {
    CastSpell: (hero, mpNeeded, spell) => {
      if (heroes[hero].mp >= mpNeeded) {
        /* If the hero has the required MP, he casts the spell, this reducing his MP */
        heroes[hero].mp -= mpNeeded;
        console.log(`${hero} has successfully cast ${spell} and now has ${heroes[hero].mp} MP!`);
      } else {
        /* If the hero is unable to cast the spell */
        console.log(`${hero} does not have enough MP to cast ${spell}!`);
      }
    },
    TakeDamage: (hero, damage, attacker) => {
      /* Reduce the hero HP by the given damage amount. */
      heroes[hero].hp -= damage;

      if (heroes[hero].hp > 0) {
        /* If the hero is still alive */
        console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero].hp} HP left!`);
      } else {
        /*  If the hero has died, remove him from your party */
        delete heroes[hero];
        console.log(`${hero} has been killed by ${attacker}!`);
      }
    },
    Recharge: (hero, amount) => {
      /* The hero increases his MP */
      const neededMp = Math.min(200 - heroes[hero].mp, amount);
      heroes[hero].mp += neededMp;

      console.log(`${hero} recharged for ${neededMp} MP!`);
    },
    Heal: (hero, amount) => {
      /* The hero increases his HP */
      const neededHp = Math.min(100 - heroes[hero].hp, amount);
      heroes[hero].hp += neededHp;

      console.log(`${hero} healed for ${neededHp} HP!`);
    }
  };

  for (let i = 0; i < numberOfHeroes; i++) {
    let [hero, hp, mp] = input.shift().split(' ');
    hp = Number(hp);
    mp = Number(mp);

    heroes[hero] = { hp, mp };
  }

  while (input[0] !== 'End') {
    let [command, hero, paramOne, paramTwo] = input
      .shift()
      .split(' - ');
    paramOne = Number(paramOne);

    commands[command](hero, paramOne, paramTwo);
  }

  Object
    .entries(heroes)
    .forEach(([hero, data]) => {
      console.log(`${hero}\n  HP: ${data.hp}\n  MP: ${data.mp}`);
    });
}

heroesOfCodeAndLogicVII(['2',
  'Solmyr 85 120',
  'Kyrre 99 50',
  'Heal - Solmyr - 10',
  'Recharge - Solmyr - 50',
  'TakeDamage - Kyrre - 66 - Orc',
  'CastSpell - Kyrre - 15 - ViewEarth',
  'End']);
heroesOfCodeAndLogicVII(['4',
  'Adela 90 150',
  'SirMullich 70 40',
  'Ivor 1 111',
  'Tyris 94 61',
  'Heal - SirMullich - 50',
  'Recharge - Adela - 100',
  'CastSpell - Tyris - 1000 - Fireball',
  'TakeDamage - Tyris - 99 - Fireball',
  'TakeDamage - Ivor - 3 - Mosquito',
  'End']);