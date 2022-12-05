class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }
    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        } else {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`;
        }
    }
    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        } else if (this.resources === 0) {
            throw new Error("You don't have enough resources to start the hike");
        } else {
            let difference = this.resources - time * 10;
            if (difference < 0) {
                return "You don't have enough resources to complete the hike";
            } else {
                this.resources -= time * 10;
                this.listOfHikes.push({ peak, time, difficultyLevel });
                return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
            }
        }
    }
    rest(time) {
        this.resources += time * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`;
        }
    }
    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        } else if (criteria === "hard" || criteria === "easy") {
            let bestHike = this.listOfHikes.filter(h => h.difficultyLevel === criteria).sort((a, b) => a.time - b.time)[0];
            if (bestHike === undefined) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            } else {
                return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
            }
        } else if (criteria === "all") {
            let result = "All hiking records:\n";
            this.listOfHikes.forEach(h => result += `${this.username} hiked ${h.peak} for ${h.time} hours\n`);
            return result.trim();
        } else {
            throw new Error("Invalid criteria");
        }
    }
}
