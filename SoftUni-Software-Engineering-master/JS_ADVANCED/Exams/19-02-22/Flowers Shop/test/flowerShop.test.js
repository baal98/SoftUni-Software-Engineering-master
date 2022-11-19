var chai = require('chai')
    , expect = chai.expect
    , assert = chai.assert
    , should = chai.should();

const flowerShop = require('../flowerShop');

describe('flowerShop', function () {
    describe('calcPriceOfFlowers', function () {
        it('should return the price of the flowers', function () {
            expect(flowerShop.calcPriceOfFlowers('rose', 5, 2)).to.equal('You need $10.00 to buy rose!');
        });
        it('should throw an error if the input is not valid', function () {
            expect(() => flowerShop.calcPriceOfFlowers(5, 5, 2)).to.throw('Invalid input!');
        });
    });
    describe('checkFlowersAvailable', function () {
        it('should return the availability of the flowers1', function () {
            expect(flowerShop.checkFlowersAvailable('rose', ['rose', 'tulip', 'daisy'])).to.equal('The rose are available!');
        });
        it('should return the availability of the flowers2', function () {
            expect(flowerShop.checkFlowersAvailable('rose', ['tulip', 'daisy'])).to.equal('The rose are sold! You need to purchase more!');
        });
    });
    describe('sellFlowers', function () {
        it('should return the flowers that are sold', function () {
            expect(flowerShop.sellFlowers(['rose', 'tulip', 'daisy'], 1)).to.equal('rose / daisy');
        });
        it('should throw an error if the input is not valid', function () {
            expect(() => flowerShop.sellFlowers(['rose', 'tulip', 'daisy'], 5)).to.throw('Invalid input!');
        });
    });
});


    