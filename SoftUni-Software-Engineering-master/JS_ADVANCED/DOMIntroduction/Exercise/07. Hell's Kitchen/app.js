// function solve() {
//   document.querySelector("#btnSend").addEventListener("click", onClick);

//   function onClick() {
//     let textArreaElement = document.querySelector("textarea");
//     let textArrea = JSON.parse(textArreaElement.value);

//     let restaurantSet = [];
//     let bestRestaurant = {};

//     for (const element of textArrea) {
//       let arrTemp = element.split(" - ");
//       let restName = arrTemp[0];

//       let restWorkers = arrTemp[1];

//       let restaurant = {
//         restaurantName: restName,
//         workers: [],
//         bestSellary: 0,
//       };
//       for (const el of restWorkers.split(", ")) {
//         let workerName = el.split(" ")[0];
//         let workerSallary = Number(el.split(" ")[1]);

//         let worker = {};
//         worker.name = workerName;
//         worker.sallary = workerSallary;

//         restaurant.workers.push(worker);
//         if (restaurant.bestSellary < worker.sallary) {
//           restaurant.bestSellary = worker.sallary;
//         }
//       }

//       //Averige salary computes and add

//       let avgSallary = 0;
//       for (const worker of restaurant.workers) {
//         avgSallary += worker.sallary;
//       }
//       avgSallary /= restaurant.workers.length;

//       restaurant.avgSallary = avgSallary;

//       for (let rest of restaurantSet) {
//         if (rest.restaurantName === restName) {
//           rest.workers.push(restaurant.workers)
//         }
//       }

//       restaurantSet.push(restaurant);
//       let bestRestAvgSellary = 0;

//       for (const restaurant of restaurantSet) {
//         if (restaurant.avgSallary > bestRestAvgSellary) {
//           bestRestaurant = restaurant;
//           bestRestAvgSellary = restaurant.avgSallary;
//         }
//       }

//       let bestWorkerSallary = ``;
//       let sortedWorkers = bestRestaurant.workers.sort(
//         (a, b) => b.sallary - a.sallary
//       );
//       for (const worker of sortedWorkers) {
//         bestWorkerSallary += `Name: ${worker.name} With Salary: ${worker.sallary} `;
//       }

//       let bestRestaurantElement = document.querySelector("#bestRestaurant > p");
//       bestRestaurantElement.textContent = `Name: ${
//         bestRestaurant.restaurantName
//       } Average Salary: ${bestRestaurant.avgSallary.toFixed(
//         2
//       )} Best Salary: ${bestRestaurant.bestSellary.toFixed(2)}`;

//       let bestWorkerElement = document.querySelector("#workers > p");
//       bestWorkerElement.textContent = bestWorkerSallary;

//       textArreaElement.value = "";
//     }
//   }
// }


function solve() {
  document.querySelector('#btnSend').addEventListener('click', onClick);
  
  const bestRest = {
     'name': '',
     'workers': [],
     'avgSalary': 0,
     'bestSalary': 0
  };
  function onClick () {
     const input = document.querySelectorAll('#inputs textarea')[0];
     const outputRest = document.querySelectorAll('#bestRestaurant p')[0];
     const outputWork = document.querySelectorAll('#workers p')[0];
     let inputArr = JSON.parse(input.value);
     
     for (let restInfo of inputArr) {
        const employees = [];
        let avgSal = 0;
        let bestSal = 0;
        let [restName, workers] = restInfo.split(' - ');
        workers = workers.split(', ');

        for (let worker of workers) {
           let [name, salary] = worker.split(' ');
           salary = Number(salary);
           if (salary > bestSal) {
              bestSal = salary;
           }
           avgSal += salary;
           employees.push([name, salary]);
        }
        avgSal = Number((avgSal / workers.length).toFixed(2));
        if (avgSal > Number(bestRest['avgSalary']) && restName != bestRest['name']) {
           bestRest['name'] = restName;
           bestRest['workers'] = employees;
           bestRest['avgSalary'] = avgSal.toFixed(2);
           bestRest['bestSalary'] = bestSal.toFixed(2);
        } else if (restName == bestRest['name']) {
           bestRest['workers'] = bestRest['workers'].concat(employees);
        }
     }
     bestRest['workers'].sort((a, b) => b[1] - a[1]);
     let outputWorkText = '';
     for (let [name, salary] of bestRest['workers']) {
        outputWorkText += `Name: ${name} With Salary: ${salary} `;
     }
     let salariesArr = bestRest['workers'].map((el) => el[1]);
     bestRest['avgSalary'] = (salariesArr.reduce((acc, salary) => acc + salary) / salariesArr.length).toFixed(2);
     bestRest['bestSalary'] = (salariesArr.sort((a, b) => b - a)[0]).toFixed(2);
     
     outputRest.textContent = `Name: ${bestRest['name']} Average Salary: ${bestRest['avgSalary']} Best Salary: ${bestRest['bestSalary']}`;
     outputWork.textContent = outputWorkText.trim();
     input.value = '';
  }
}
