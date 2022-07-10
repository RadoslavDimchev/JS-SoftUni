function minerTask(input = []) {
    // create a collecton
    const resources = {};

    // parse input
    while (input.length > 0) {
        const resource = input.shift(),
            quantity = Number(input.shift());

        // check if resource exist and add quantity
        if (!resources.hasOwnProperty(resource)) {
            resources[resource] = 0;
        }

        resources[resource] += quantity;
    }

    // print resources and quantities
    for (const resource in resources) {
        console.log(resource, '->', resources[resource]);
    }
}

// second solution with Map

/* function minerTask(input = []) {
    // create a collecton
    const resources = new Map();

    // parse input
    while (input.length > 0) {
        const resource = input.shift();
        const quantity = Number(input.shift());

        // check if resource exist and add quantity
        if (!resources.has(resource)) {
            resources.set(resource, 0);
        }

        resources.set(resource, resources.get(resource) + quantity);
    }

    // print resources and quantities
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