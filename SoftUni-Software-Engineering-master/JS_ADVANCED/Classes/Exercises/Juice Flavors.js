function solution(juices) {
    const juicesCollection = {};
    const bottles = new Map();

    for (let juice of juices) {
        let [type, quantity] = juice.split(' => ');
        quantity = Number(quantity);
        if (!Object.keys(juicesCollection).includes(type)) {
            juicesCollection[type] = 0;
        }
        juicesCollection[type] += quantity;
        if (juicesCollection[type] >= 1000) {
            if (!bottles.has(type)) {
                bottles.set(type, 0);
            }
            const bottlesMade = Math.floor(juicesCollection[type] / 1000);
            let totalBottles = bottles.get(type) + bottlesMade;
            bottles.set(type, totalBottles);
            juicesCollection[type] -= bottlesMade * 1000;
        }
    }
    bottles.forEach((bottles, type) => {
        console.log(`${type} => ${bottles}`);
    })
}

solution(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);

solution(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);