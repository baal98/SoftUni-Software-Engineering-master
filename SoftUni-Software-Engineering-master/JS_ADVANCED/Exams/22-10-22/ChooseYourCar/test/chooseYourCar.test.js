// Using Mocha and Chai write JS Unit Tests to test a variable named chooseYourCar, which represents an object. You may use the following code as a template:
// describe("Tests …", function() {
//     describe("TODO …", function() {
//         it("TODO …", function() {
//             // TODO: …
//         });
//      });
//      // TODO: …
// });

// The object that should have the following functionality:				
// •	choosingType (type, color, year) - A function that accepts three parameters: string, string, and number.
// o	If the year is less than 1900 and the year is more than 2022, throw an error: "Invalid Year!"
// o	If the value of the string type is different from "Sedan", throw an error: "This type of car is not what you are looking for."
// o	To be picked, the car must meet the following requirement:
// 	If the year of the car is greater or equal to 2010, return the string: 
// "This ${color} ${type} meets the requirements, that you have."
// o	Otherwise, if the above conditions are not met, return the following message:
// "This ${type} is too old for you, especially with that ${color} color."
// o	There is no need for validation for the input, you will always be given two strings, and number.
// •	brandName (brands, brandIndex) - A function that accepts an array and number. The brands array will store the brand names (["BMW", "Toyota", "Peugeot"…]).
// o	You must remove an element (brand) from the array that is located on the index specified as a parameter.
// o	Finally, return the changed array of brands as a string, joined by a comma and a space.
// o	There is a need for validation for the input, an array and index may not always be valid. In case of submitted invalid parameters, throw an error "Invalid Information!":
// 	If passed brands parameter is not an array.
// 	If the index is not a number and is outside the limits of the array.

// •	CarFuelConsumption (distanceInKilometers, consumptedFuelInLitres) - A function that accepts two parameters: number, number.
// o	You test drive the car to find out what its consumption is.
// o	You need to calculate liters per 100 kilometers consumption by dividing the fuel consumption by 100 and then multiply by distance.
// 	The result must be formatted to the second digit after the decimal point.
// o	If the liters/100km is less or equal to 7L. return the following message: 
// "The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km."
// o	Else, return the following message:  
// "The car burns too much fuel - ${litersPerHundredKm} liters!"
// o	You need to validate the input, if the distanceInKilometers   and consumptedFuelInLitres are not a numbers, or are a negative numbers, throw an error: "Invalid Information!".
// JS Code
// To ease you in the process, you are provided with an implementation that meets all of the specification requirements for the chooseYourCar object:
// chooseYourCar.js
// const chooseYourCar = {
//     choosingType(type, color, year) {
//         if (year < 1900 || year > 2022) {
//             throw new Error(`Invalid Year!`);
//         } else {
//             if (type == "Sedan") {
//                 if (year >= 2010) {
//                     return `This ${color} ${type} meets the requirements, that you have.`;
//                 } else {
//                     return `This ${type} is too old for you, especially with that ${color} color.`;
//                 }
//             }
//             throw new Error(`This type of car is not what you are looking for.`);
//         }
//     },
//    brandName(brands, brandIndex) {
//         let result = [];
//         if (!Array.isArray(brands) || !Number.isInteger(brandIndex) || brandIndex < 0 || brandIndex >= brands.length) {
//             throw new Error("Invalid Information!");
//         }
//         for (let i = 0; i < brands.length; i++) {
//             if (i !== brandIndex) {
//                 result.push(brands[i]);
//             }
//         }
//         return result.join(", ");
//     },
//     carFuelConsumption(distanceInKilometers, consumptedFuelInLiters) {
//        let litersPerHundredKm =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);


//         if (typeof distanceInKilometers !== "number" || distanceInKilometers <= 0 ||
//             typeof consumptedFuelInLiters !== "number" || consumptedFuelInLiters <= 0) {
//             throw new Error("Invalid Information!");
//         } else if (litersPerHundredKm <= 7) {
//             return `The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`;
//         } else {
//             return `The car burns too much fuel - ${litersPerHundredKm} liters!`;
//         }
//     }
// }

var chai = require('chai')
    , expect = chai.expect
    , assert = chai.assert
    , should = chai.should();

var chooseYourCar = require('../chooseYourCar');

describe("chooseYourCar", function() {
    describe("choosingType", function() {
        it("should return 'This red Sedan meets the requirements, that you have.'", function() {
            expect(chooseYourCar.choosingType("Sedan", "red", 2015)).to.equal("This red Sedan meets the requirements, that you have.");
        });
        it("should return 'This Sedan is too old for you, especially with that red color.'", function() {
            expect(chooseYourCar.choosingType("Sedan", "red", 2005)).to.equal("This Sedan is too old for you, especially with that red color.");
        });
        it("should throw an error 'Invalid Year!'", function() {
            expect(() => chooseYourCar.choosingType("Sedan", "red", 2023)).to.throw("Invalid Year!");
        });
        it("should throw an error1 'Invalid Year!'", function() {
            expect(() => chooseYourCar.choosingType("Sedan", "red", 1899)).to.throw("Invalid Year!");
        });
        it("should throw an error 'This type of car is not what you are looking for.'", function() {
            expect(() => chooseYourCar.choosingType("SUV", "red", 2020)).to.throw("This type of car is not what you are looking for.");
        });
        it("should throw an error 'This type of car is not what you are looking for.'", function() {
            expect(() => chooseYourCar.choosingType("Sedan", "red", 2009)).to.throw("This type of car is not what you are looking for.");
        });
    });
    describe("brandName", function() {
        it("should return 'Toyota, Peugeot'", function() {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0)).to.equal("Toyota, Peugeot");
        });
        it("should return 'BMW, Peugeot'", function() {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1)).to.equal("BMW, Peugeot");
        });
        it("should return 'BMW, Toyota'", function() {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2)).to.equal("BMW, Toyota");
        });
        it("should throw an error 'Invalid Information!'", function() {
            expect(() => chooseYourCar.brandName("BMW", 2)).to.throw("Invalid Information!");
        });
        it("should throw an error2 'Invalid Information!'", function() {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], "BMW")).to.throw("Invalid Information!");
        });
        it("should throw an error1 'Invalid Information!'", function() {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3)).to.throw("Invalid Information!");
        });
    });
    describe("carFuelConsumption", function () {
        
        it("should return 'The car is efficient enough, it burns 7.00 liters/100 km.'", function () {
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal("The car is efficient enough, it burns 7.00 liters/100 km.");
        });
        it("should return1 'The car is efficient enough, it burns 7.00 liters/100 km.'", function () {
            expect(chooseYourCar.carFuelConsumption(100, 1)).to.equal("The car is efficient enough, it burns 1.00 liters/100 km.");
        });
        it("should return 'The car burns too much fuel - 8.00 liters!'", function () {
            expect(chooseYourCar.carFuelConsumption(100, 8)).to.equal("The car burns too much fuel - 8.00 liters!");
        });
        it("should throw an error1 'Invalid Information!'", function () {
            expect(() => chooseYourCar.carFuelConsumption("BMW", 2)).to.throw("Invalid Information!");
        });
        it("should throw an error2 'Invalid Information!'", function () {
            expect(() => chooseYourCar.carFuelConsumption(100, "BMW")).to.throw("Invalid Information!");
        });
        it("should throw an error3 'Invalid Information!'", function () {
            expect(() => chooseYourCar.carFuelConsumption(-100, 2)).to.throw("Invalid Information!");
        });
        it("should throw an error 'Invalid Information!'", function () {
            expect(() => chooseYourCar.carFuelConsumption(100, -2)).to.throw("Invalid Information!");
        });
        it("should throw an error11 'Invalid Information!'", function () {
            expect(() => chooseYourCar.carFuelConsumption(0, 2)).to.throw("Invalid Information!");
        });
        it("should throw an error22 'Invalid Information!'", function () {
            expect(() => chooseYourCar.carFuelConsumption(100, 0)).to.throw("Invalid Information!");
        });
        it("should throw an error33 'Invalid Information!'", function () {
            expect(() => chooseYourCar.carFuelConsumption(0, 0)).to.throw("Invalid Information!");
        });
        it("should throw an error44 'Invalid Information!'", function () {
            expect(() => chooseYourCar.carFuelConsumption(-100, -2)).to.throw("Invalid Information!");
        });

    });
});