function minerTask(input) {
    let resources = {};

    while (input.length > 0) {
        let resource = input.shift();
        let quantity = Number(input.shift());

        if (resources.hasOwnProperty(resource)) {
            resources[resource] += quantity;
        } else {
            resources[resource] = quantity;
        }
    }

    for (const resource in resources) {
        console.log(resource, '->', resources[resource]);
    }
}

//second solution with Map()
/* function minerTask(input) {
    let resources = new Map();

    while (input.length > 0) {
        let resource = input.shift();
        let quantity = Number(input.shift());

        if (resources.has(resource)) {
            let newValue = resources.get(resource) + quantity;
            resources.set(resource, newValue);
        } else {
            resources.set(resource, quantity);
        }
    }

    for (const [resource, quantity] of resources) {
        console.log(resource, '->', quantity);
    }
} */

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17']);
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15']);