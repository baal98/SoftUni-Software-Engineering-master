class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if (!name || !salary || salary < 0 || !position || !department) {
            throw new Error('Invalid input!');
        }
        if (!Object.keys(this.departments).includes(department)) {
            this.departments[department] = [];
        }
        this.departments[department].push({
            name,
            salary,
            position
        });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    static compareEmployees(a, b) {
        if (a.salary - b.salary != 0) {
            return b.salary - a.salary;
        }
        return a.name.localeCompare(b.name);
    }

    bestDepartment() {
        let bestAverage = 0;
        let bestDepName;

        for (let dep of Object.entries(this.departments)){
            let avgSal = 0;
            const empCount = dep[1].length;

            for (let emp of dep[1]) {
                avgSal += emp.salary;
            }
            avgSal /= empCount;
            if (avgSal > bestAverage) {
                bestAverage = avgSal;
                bestDepName = dep[0];
            }
        }
        let result = `Best Department is: ${bestDepName}
Average salary: ${bestAverage.toFixed(2)}\n`
        for (let emp of this.departments[bestDepName].sort(Company.compareEmployees)) {
            result += `${emp.name} ${emp.salary} ${emp.position}\n`
        }
        return result.trimRight();
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());