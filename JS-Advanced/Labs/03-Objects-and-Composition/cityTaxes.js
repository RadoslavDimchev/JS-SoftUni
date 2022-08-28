function cityTaxes(name, population, treasury) {
  const result = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += Math.floor(this.population * this.taxRate);
    },
    applyGrowth(percentage) {
      this.population += Math.floor(this.population * percentage / 100);
    },
    applyRecession(percentage) {
      this.treasury -= Math.floor(this.treasury * percentage / 100);
    }
  };

  return result;
}

const city = cityTaxes('Tortuga', 7000, 15000);

console.log(city);

city.collectTaxes();
console.log(city.treasury);

city.applyGrowth(5);
console.log(city.population);