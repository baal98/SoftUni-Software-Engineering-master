let input = `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`;
let criteria = "gender-Female";

function sortObjects(obj, crit) {
  let objects = JSON.parse(obj);
  let firstCriteria = crit.split("-")[0];
  let secondCriteria = crit.split("-")[1];
  let id = 0;
  if (crit == "all") {
    for (const empl of objects) {
      console.log(
        `${id}. ${empl.first_name} ${empl.last_name} - ${empl.email}`
      );
      id++;
    }
  } else {
    for (const empl of objects) {
      if (empl[firstCriteria] == secondCriteria) {
        console.log(
          `${id}. ${empl.first_name} ${empl.last_name} - ${empl.email}`
        );
        id++;
      }
    }
  }
}

sortObjects(input, criteria);
