class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(footballPlayers) {
    const result = new Set();

    for (const player of footballPlayers) {
      let [name, age, playerValue] = player.split('/');
      age = Number(age);
      playerValue = Number(playerValue);

      const playerFinded = this.invitedPlayers.find(p => p.name === name);
      if (playerFinded) {
        if (playerValue > playerFinded.playerValue) {
          playerFinded.playerValue = playerValue;
        }
      } else {
        this.invitedPlayers.push({ name, age, playerValue });
        result.add(name);
      }
    }

    return `You successfully invite ${[...result].join(', ')}.`;
  }

  signContract(selectedPlayer) {
    let [name, playerOffer] = selectedPlayer.split('/');
    playerOffer = Number(playerOffer);

    const player = this.invitedPlayers.find(p => p.name === name);
    if (!player) {
      throw new Error(`${name} is not invited to the selection list!`);
    }
    if (playerOffer < player.playerValue) {
      throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${player.playerValue - playerOffer} million more are needed to sign the contract!`);
    }

    player.playerValue = 'Bought';
    return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
  }

  ageLimit(name, age) {
    const player = this.invitedPlayers.find(p => p.name === name);
    if (!player) {
      throw new Error(`${name} is not invited to the selection list!`);
    }
    let ageDifference = age - player.age;

    if (player.age < age) {
      if (ageDifference < 5) {
        return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
      } else if (ageDifference > 5) {
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
      }
    }
    return `${name} is above age limit!`;
  }

  transferWindowResult() {
    const result = ['Players list:'];

    this.invitedPlayers
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach(p => result.push(`Player ${p.name}-${p.playerValue}`));

    return result.join('\n');
  }
}

let fTeam = new footballTeam('Barcelona', 'Spain');
console.log(fTeam.newAdditions(['Kylian Mbappé/23/160', 'Lionel Messi/35/50', 'Pau Torres/25/52']));
console.log(fTeam.signContract('Kylian Mbappé/240'));
console.log(fTeam.ageLimit('Kylian Mbappé', 30));
console.log(fTeam.transferWindowResult());

// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.
// Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// Players list:
// Player Kylian Mbappé-Bought
// Player Lionel Messi-50
// Player Pau Torres-52