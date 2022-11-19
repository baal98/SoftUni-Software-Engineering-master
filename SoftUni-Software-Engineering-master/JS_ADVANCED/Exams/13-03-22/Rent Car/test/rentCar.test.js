var chai = require('chai')
    , expect = chai.expect
    , assert = chai.assert
    , should = chai.should();
const rentCar = require('../rentCar');
describe('rentCar', function () {
    describe('searchCar', function () {
        it('should return a string', function () {
            expect(rentCar.searchCar(['Volkswagen', 'Audi', 'Toyota', 'BMW', 'Mercedes'], 'Audi')).to.be.a('string');
        });
        it('should return a string with the number of cars of the model', function () {
            expect(rentCar.searchCar(['Volkswagen', 'Audi', 'Toyota', 'BMW', 'Mercedes'], 'Audi')).to.equal('There is 1 car of model Audi in the catalog!');
        });
        it('should throw an error if the model is not in the catalog', function () {
            expect(() => rentCar.searchCar(['Volkswagen', 'Audi', 'Toyota', 'BMW', 'Mercedes'], 'Ferrari')).to.throw('There are no such models in the catalog!');
        });
        it('should throw an error if the input is invalid', function () {
            expect(() => rentCar.searchCar('Volkswagen', 'Audi')).to.throw('Invalid input!');
        });
    });
    describe('calculatePriceOfCar', function () {
        it('should return a string', function () {
            expect(rentCar.calculatePriceOfCar('Audi', 5)).to.be.a('string');
        });
        it('should return a string with the price of the car', function () {
            expect(rentCar.calculatePriceOfCar('Audi', 5)).to.equal('You choose Audi and it will cost $180!');
        });
        it('should throw an error if the model is not in the catalog', function () {
            expect(() => rentCar.calculatePriceOfCar('Ferrari', 5)).to.throw('No such model in the catalog!');
        });
        it('should throw an error if the input is invalid', function () {
            expect(() => rentCar.calculatePriceOfCar('Audi', '5')).to.throw('Invalid input!');
        });
    });
    describe('checkBudget', function () {
        it('should return a string', function () {
            expect(rentCar.checkBudget(20, 5, 100)).to.be.a('string');
        });
        it('should return a string with the price of the car', function () {
            expect(rentCar.checkBudget(20, 5, 100)).to.equal('You rent a car!');
        });
        it('should return a string with the price of the car', function () {
            expect(rentCar.checkBudget(20, 5, 100)).to.equal('You rent a car!');
        });
        it('should return a string with the price of the car', function () {
            expect(rentCar.checkBudget(20, 5, 100)).to.equal('You rent a car!');
        });
        it('should throw an error if the input is invalid', function () {
            expect(() => rentCar.checkBudget('20', '5', '100')).to.throw('Invalid input!');
        });
    });
});