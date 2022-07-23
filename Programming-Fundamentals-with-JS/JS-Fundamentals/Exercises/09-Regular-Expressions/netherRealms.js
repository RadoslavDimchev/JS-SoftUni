function netherRealms(input = '') {
  const patternForHealth = /[^0-9+\-*\/.]/g;
  const patternForDamage = /([-]?\d+(?:[.]\d+)*)/g;
  const patternForSymbols = /[*\/]/g;
  const listOfDemons = input.split(/[, ]+/g);
  const demons = {};

  for (const demon of listOfDemons) {
    const healthMatch = demon.match(patternForHealth);
    const damageMatch = demon.match(patternForDamage);
    const symbolsMatch = demon.match(patternForSymbols);
    let health = 0;
    let damage = 0;

    if (healthMatch) {
      healthMatch.forEach(char => health += char.charCodeAt());
    }

    if (damageMatch) {
      damageMatch.forEach(num => damage += +num);
    }

    if (symbolsMatch) {
      symbolsMatch.forEach(symbol => {
        symbol === '*' ? damage *= 2 : damage /= 2;
      });
    }

    demons[demon] = { health, damage };
  }

  Object
    .entries(demons)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([demon, data]) => {
      console.log(`${demon} - ${data.health} health, ${data.damage.toFixed(2)} damage`);
    });
}

netherRealms(`M3ph-0.5s-0.5t0.0**`);
netherRealms(`M3ph1st0**, Azazel, Azazel`);
netherRealms(`Gos/ho`);