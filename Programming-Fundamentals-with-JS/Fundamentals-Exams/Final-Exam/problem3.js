function heroRecruitment(input = []) {
  const heroes = {};

  const commands = {
    Enroll: (hero) => {
      if (heroes.hasOwnProperty(hero)) {
        console.log(`${hero} is already enrolled.`);
      } else {
        heroes[hero] = [];
      }
    },
    Learn: (hero, spell) => {
      if (!heroes.hasOwnProperty(hero)) {
        console.log(`${hero} doesn't exist.`);
      } else {
        if (heroes[hero].includes(spell)) {
          console.log(`${hero} has already learnt ${spell}.`);
        } else {
          heroes[hero].push(spell);
        }
      }
    },
    Unlearn: (hero, spell) => {
      if (!heroes.hasOwnProperty(hero)) {
        console.log(`${hero} doesn't exist.`);
      } else {
        if (heroes[hero].includes(spell)) {
          heroes[hero].splice(heroes[hero].indexOf(spell), 1);
        } else {
          console.log(`${hero} doesn't know ${spell}.`);
        }
      }
    }
  };

  while (input[0] !== 'End') {
    const [command, hero, spell] = input
      .shift()
      .split(' ');

    commands[command](hero, spell);
  }

  console.log('Heroes:');

  Object
    .entries(heroes)
    .forEach(([hero, data]) => {
      console.log(`== ${hero}: ${data === [] ? '' : data.join(', ')}`);
    });
}

heroRecruitment(["Enroll Stefan",
  "Enroll Peter",
  "Enroll Stefan",
  "Learn Stefan ItShouldWork",
  "Learn John ItShouldNotWork",
  "Unlearn George Dispel",
  "Unlearn Stefan ItShouldWork",
  "End"]);
heroRecruitment(["Enroll Stefan",
  "Learn Stefan ItShouldWork",
  "Learn Stefan ItShouldWork",
  "Unlearn Stefan NotFound",
  "End"]);
heroRecruitment(["Enroll Stefan",
  "Enroll Peter",
  "Enroll John",
  "Learn Stefan Spell",
  "Learn Peter Dispel",
  "End"]);