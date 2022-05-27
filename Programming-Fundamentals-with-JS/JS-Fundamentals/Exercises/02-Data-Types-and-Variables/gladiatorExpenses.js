function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;

    for (let currFight = 1; currFight <= lostFights; currFight++) {
        if (currFight % 2 === 0) {
            expenses += helmetPrice;
        }

        if (currFight % 3 === 0) {
            expenses += swordPrice;
        }

        if (currFight % 6 === 0) {
            expenses += shieldPrice;
        }

        if (currFight % 12 === 0) {
            expenses += armorPrice;
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);