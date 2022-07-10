function arenaTier(input = []) {
    const pool = {};
    const skills = {};

    while (input[0] !== 'Ave Cesar') {
        const data = input.shift();

        if (data.includes(' -> ')) {
            addGladiatorStuff(data);
        } else {
            gladiatorsBattle(data);
        }
    }

    sortAndPrint();

    function addGladiatorStuff(data) {
        let [gladiator, technique, skill] =
            data.split(' -> ');
        skill = +skill;

        if (!pool.hasOwnProperty(gladiator)) {
            pool[gladiator] = {};
            skills[gladiator] = 0;
        }

        if (pool[gladiator][technique] > skill) {
            return;
        }

        pool[gladiator][technique] = skill;
        skills[gladiator] += skill;
    }

    function gladiatorsBattle(data) {
        const [gladiator1, gladiator2] = data.split(' vs ');

        const deleteGladiator = (pool, skills, gladiator) => {
            delete pool[gladiator];
            delete skills[gladiator];
        };

        if (skills[gladiator1] && skills[gladiator2]) {
            let isCommonTechnique = false;

            for (const technique in pool[gladiator1]) {
                if (pool[gladiator2].hasOwnProperty(technique)) {
                    isCommonTechnique = true;
                    break;
                }
            }

            if (isCommonTechnique) {
                if (skills[gladiator1] > skills[gladiator2]) {
                    deleteGladiator(pool, skills, gladiator2);
                } else {
                    deleteGladiator(pool, skills, gladiator1);
                }
            }
        }
    }

    function sortAndPrint() {
        Object
            .entries(skills)
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .forEach(([gladiator, skill]) => {
                console.log(`${gladiator}: ${skill} skill`);

                Object
                    .entries(pool[gladiator])
                    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                    .forEach(([technique, skill]) => {
                        console.log(`- ${technique} <!> ${skill}`);
                    });
            });
    }
}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar']);
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar']);