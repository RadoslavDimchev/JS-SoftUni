function legendaryFarming(input = '') {
    const elements = input.split(' ');
    let isObtained = false;

    const junks = {};
    const keyMaterials = {
        shards: 0,
        fragments: 0,
        motes: 0
    };

    while (elements.length > 0) {
        const quantity = +elements.shift();
        const material = elements.shift().toLocaleLowerCase();

        const addQuantity = (item, quantity) => keyMaterials[item] += quantity;

        switch (material) {
            case 'shards':
                addQuantity('shards', quantity);
                checkForObtained('Shadowmourne', 'shards');
                break;
            case 'fragments':
                addQuantity('fragments', quantity);
                checkForObtained('Valanyr', 'fragments');
                break;
            case 'motes':
                addQuantity('motes', quantity);
                checkForObtained('Dragonwrath', 'motes');
                break;
            default:
                addJunks(material, quantity);
                break;
        }

        if (isObtained) break;
    }

    sortAndPrint(keyMaterials);
    sortAndPrint(junks);

    function checkForObtained(keyMaterial, material) {
        if (keyMaterials[material] >= 250) {
            isObtained = true;
            keyMaterials[material] -= 250;

            console.log(`${keyMaterial} obtained!`);
        }
    }

    function addJunks(material, quantity) {
        if (!junks.hasOwnProperty(material)) {
            junks[material] = 0;
        }

        junks[material] += quantity;
    }

    function sortAndPrint(collection) {
        Object
            .entries(collection)
            .sort(collection === keyMaterials
                ? (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
                : (a, b) => a[0].localeCompare(b[0]))
            .forEach(([material, quantity]) => {
                console.log(`${material}: ${quantity}`);
            });
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');