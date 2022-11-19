class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model === '' || typeof model !== 'string') {
            throw new Error('Invalid input!');
        }
        if (typeof horsepower !== 'number' || horsepower < 0) {
            throw new Error('Invalid input!');
        }
        if (typeof price !== 'number' || price < 0) {
            throw new Error('Invalid input!');
        }
        if (typeof mileage !== 'number' || mileage < 0) {
            throw new Error('Invalid input!');
        }

        const car = {
            model,
            horsepower,
            price: price.toFixed(2),
            mileage: mileage.toFixed(2)
        };

        this.availableCars.push(car);

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        const car = this.availableCars.find(c => c.model === model);

        if (!car) {
            throw new Error(`${model} was not found!`);
        }

        if (car.mileage <= desiredMileage) {
            this.availableCars = this.availableCars.filter(c => c.model !== model);
            this.soldCars.push(car);
            this.totalIncome += Number(car.price);
            return `${model} was sold for ${car.price}$`;
        } else if (car.mileage - desiredMileage <= 40000) {
            const newPrice = Number(car.price) - (Number(car.price) * 0.05);
            car.price = newPrice.toFixed(2);
            this.availableCars = this.availableCars.filter(c => c.model !== model);
            this.soldCars.push(car);
            this.totalIncome += Number(car.price);
            return `${model} was sold for ${car.price}$`;
        } else {
            const newPrice = Number(car.price) - (Number(car.price) * 0.1);
            car.price = newPrice.toFixed(2);
            this.availableCars = this.availableCars.filter(c => c.model !== model);
            this.soldCars.push(car);
            this.totalIncome += Number(car.price);
            return `${model} was sold for ${car.price}$`;
        }
    }

    currentCar() {
        if (this.availableCars.length === 0) {
            return 'There are no available cars';
        }

        return `-Available cars:
---${this.availableCars.map(c => `${c.model} - ${c.horsepower} HP - ${c.mileage} km - ${c.price}$`).join('\n---')}`;
    }

    salesReport(criteria) {
        if (criteria !== 'model' && criteria !== 'horsepower') {
            throw new Error('Invalid criteria!');
        } else if (criteria === 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        } else {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        }

        return `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$
-${this.soldCars.length} cars sold:
---${this.soldCars.map(c => `${c.model} - ${c.horsepower} HP - ${c.price}$`).join('\n---')}`;
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));




