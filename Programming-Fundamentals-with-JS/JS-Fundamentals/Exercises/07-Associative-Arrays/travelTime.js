function travelTime(input = []) {
    // create a structure ot data
    const countries = {};

    // parse input
    for (const data of input) {
        let [country, town, cost] = data.split(' > ');
        cost = +cost;

        if (!countries.hasOwnProperty(country)) {
            countries[country] = {};
        }

        if (cost > countries[country][town]) {
            continue;
        }

        countries[country][town] = cost;
    }

    // sort and print
    Object
        .keys(countries)
        .sort((a, b) => a.localeCompare(b))
        .forEach(country => {
            let townsData = Object
                .entries(countries[country])
                .sort((a, b) => a[1] - b[1])
                .map(arr => arr.join(' -> '));

            console.log(`${country} -> ${townsData.join(' ')}`);
        });
}

// second solution using Object and nested Map

/* function travelTime(input = []) {
    // create a collection
    const countries = {};

    // parse input
    for (const data of input) {
        let [country, town, cost] = data.split(' > ');
        cost = +cost;

        if (!countries.hasOwnProperty(country)) {
            countries[country] = new Map();
        }

        if (cost > countries[country].get(town)) {
            continue;
        }

        countries[country].set(town, cost);
    }

    // sort and print
    Object
        .keys(countries)
        .sort((a, b) => a.localeCompare(b))
        .forEach(country => {
            let townsData = Array
                .from(countries[country])
                .sort((a, b) => a[1] - b[1])
                .map(el => el.join(' -> '));

            console.log(`${country} -> ${townsData.join(' ')}`);
        });
} */

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]);
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10']);