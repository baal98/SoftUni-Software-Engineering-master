var chai = require('chai')
    , expect = chai.expect
    , assert = chai.assert
    , should = chai.should();

let carService = require('../exams');

describe('isItExpensive', () => {
    let car = null;
    beforeEach(() => {
        car = carService;
    });
    it('If issue is Engine or Transmission, value will be expensive', () => {
        let issue = carService.isItExpensive('Engine');
        expect(issue).to.equal('The issue with the car is more severe and it will cost more money');
        let issue2 = carService.isItExpensive('Transmission');
        expect(issue2).to.equal('The issue with the car is more severe and it will cost more money');
    });
    it('If issue is different from Engine the price will be cheaper', () => {
        let issue = carService.isItExpensive('wheel');
        expect(issue).to.equal('The overall price will be a bit cheaper');
    });
});

describe('discount', () => {
    let car = null;
    beforeEach(() => {
        car = carService;
    });
    it('If number of parts is greater than 2 and less than 7, discount is 15%', () => {
        let discount = carService.discount(3, 100);
        expect(discount).to.equal('Discount applied! You saved 15$');
    });
    it('If number of parts is greater than 7, discount is 30%', () => {
        let discount = carService.discount(8, 100);
        expect(discount).to.equal('Discount applied! You saved 30$');
    });
    it('If number of parts is less than 2, discount is not applied', () => {
        let discount = carService.discount(1, 100);
        expect(discount).to.equal('You cannot apply a discount');
    });
});

describe('price', () => {
    let car = null;
    beforeEach(() => {
        car = carService;
    });
    it('If partsCatalog is not an array, throw error', () => {
        let price = () => carService.partsToBuy('wheel', ['wheel']);
        expect(price).to.throw();
    });
    it('If neededParts is not an array, throw error', () => {
        let price = () => carService.partsToBuy(['wheel'], 'wheel');
        expect(price).to.throw();
    });
    it('If partsCatalog is an array and neededParts is an array, return total price', () => {
        let part1 = { part: "blowoff valve", price: 145 };
        let part2 = { part: "coil springs", price: 230 };
        let partsCatalog = [part1, part2];

        let neededParts = ['blowoff valve', 'coil springs'];
        let price = carService.partsToBuy(partsCatalog, neededParts);
        expect(price).to.equal(375);
    });
    it('If partsCatalog is an array and neededParts is not an array, throw error', () => {
        let part1 = { part: "blowoff valve", price: 145 };
        let part2 = { part: "coil springs", price: 230 };
        let partsCatalog = [part1, part2];

        let neededParts = 'blowoff valve';
        let price = () => carService.partsToBuy(partsCatalog, neededParts);
        expect(price).to.throw();
    });
    it('If neededParts is an array and partsCatalog is not an array, throw error', () => {
        let partsCatalog = 'wheel';

        let neededParts = ['blowoff valve', 'coil springs'];
        let price = () => carService.partsToBuy(partsCatalog, neededParts);
        expect(price).to.throw();
    });
    it('If partsCatalog is empty, return 0', () => {
        let partsCatalog = [];
        let neededParts = ['blowoff valve', 'coil springs'];
        let price = carService.partsToBuy(partsCatalog, neededParts);
        expect(price).to.equal(0);
    });
    it('PartsCatalog get only neededParts and sum their price', () => {
        let part1 = { part: "blowoff valve", price: 145 };
        let part2 = { part: "coil springs", price: 230 };
        let partsCatalog = [part1, part2];

        let neededParts = ['blowoff valve'];
        let price = carService.partsToBuy(partsCatalog, neededParts);
        expect(price).to.equal(145);
    });
});
