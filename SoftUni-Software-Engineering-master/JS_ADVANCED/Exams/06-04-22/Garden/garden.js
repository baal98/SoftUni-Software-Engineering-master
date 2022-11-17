class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.");
        } else {
            this.plants.push({
                plantName,
                spaceRequired,
                ripe: false,
                quantity: 0
            });
            this.spaceAvailable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`;
        }
    }

    ripenPlant(plantName, quantity) {
        let plant = this.plants.find(x => x.plantName === plantName);
        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        } else if (plant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        } else if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        } else {
            plant.ripe = true;
            plant.quantity += quantity;
            if (quantity === 1) {
                return `${quantity} ${plantName} has successfully ripened.`;
            } else {
                return `${quantity} ${plantName}s have successfully ripened.`;
            }
        }
    }

    harvestPlant(plantName) {
        let plant = this.plants.find(x => x.plantName === plantName);
        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        } else if (!plant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        } else {
            this.plants = this.plants.filter(x => x.plantName !== plantName);
            this.storage.push({
                plantName,
                quantity: plant.quantity
            });
            this.spaceAvailable += plant.spaceRequired;
            return `The ${plantName} has been successfully harvested.`;
        }
    }

    generateReport() {
        let result = `The garden has ${this.spaceAvailable} free space left.\nPlants in the garden: ${this.plants.map(x => x.plantName).sort((a, b) => a.localeCompare(b)).join(", ")}`;
        if (this.storage.length === 0) {
            result += `\nPlants in storage: The storage is empty.`;
        } else if (this.storage.length > 0) {
            result += `\nPlants in storage: ${this.storage.map(x => `${x.plantName} (${x.quantity})`).join(", ")}`;
        }
    }
}

