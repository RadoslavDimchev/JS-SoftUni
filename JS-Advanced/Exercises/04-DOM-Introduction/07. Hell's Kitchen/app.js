function solve() {
  document.querySelector('#btnSend').addEventListener('click', onClick);

  function onClick() {
    const input = JSON.parse(document.querySelector('div#inputs textarea').value);
    const restaurants = {};
    let highestAvgSalary = 0;
    let bestRestaurant = '';

    for (const data of input) {
      let [restaurant, ...workers] = data.split(' - ');
      workers = workers.toString().split(', ');

      for (const workerInfo of workers) {
        const [name, salary] = workerInfo.split(' ');

        if (!restaurants[restaurant]) {
          restaurants[restaurant] = {};
        }

        restaurants[restaurant][name] = Number(salary);
      }
    }

    for (const restaurant in restaurants) {
      const salaries = Object.values(restaurants[restaurant]);
      let avgSalary = 0;

      for (let salary of salaries) {
        avgSalary += salary;
      }

      avgSalary /= salaries.length;

      if (avgSalary > highestAvgSalary) {
        highestAvgSalary = avgSalary;
        bestRestaurant = restaurant;
      }
    }

    const bestRestaurantSorted = Object
      .entries(restaurants[bestRestaurant])
      .sort((a, b) => b[1] - a[1]);

    const workersData = [];

    for (const [name, salary] of bestRestaurantSorted) {
      workersData.push(`Name: ${name} With Salary: ${salary}`);
    }

    document.querySelector('div#bestRestaurant p')
      .textContent = `Name: ${bestRestaurant} Average Salary: ${highestAvgSalary.toFixed(2)} Best Salary: ${bestRestaurantSorted[0][1].toFixed(2)}`;

    document.querySelector('div#workers p').textContent = workersData.join(' ');
  }
}