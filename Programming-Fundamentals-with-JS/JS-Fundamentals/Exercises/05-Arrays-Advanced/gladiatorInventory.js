function gladiatorInventory(array) {
    let inventory = array.shift().split(' ');

    for (let line of array) {
        let tokens = line.split(' ');
        let command = tokens[0];
        let equipment = tokens[1];

        switch (command) {
            case 'Buy':
                buyEquipment(equipment);
                break;
            case 'Trash':
                deleteEquipment(equipment);
                break;
            case 'Repair':
                deleteEquipment(equipment);
                inventory.push(equipment);
                break;
            case 'Upgrade':
                upgradeEquipment(equipment);
                break;
        }
    }

    console.log(inventory.join(' '));

    function buyEquipment(equipment) {
        if (!inventory.includes(equipment)) {
            inventory.push(equipment);
        }
    }

    function deleteEquipment(equipment) {
        if (inventory.includes(equipment)) {
            let index = inventory.indexOf(equipment);
            inventory.splice(index, 1);
        }
    }

    function upgradeEquipment(equipment) {
        let tokens = equipment.split('-');
        let equipmentOfToken = tokens[0];

        if (inventory.includes(equipmentOfToken)) {
            let indexOfEquipment = inventory.indexOf(equipmentOfToken);
            inventory.splice(indexOfEquipment + 1, 0, `${equipmentOfToken}:${tokens[1]}`);
        }
    }
}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);