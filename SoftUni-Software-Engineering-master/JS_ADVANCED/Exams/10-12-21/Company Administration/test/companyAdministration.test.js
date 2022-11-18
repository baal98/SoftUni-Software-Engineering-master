var chai = require('chai')
    , expect = chai.expect
    , assert = chai.assert
    , should = chai.should();
const companyAdministration = require('../companyAdministration');

describe('companyAdministration', function () {
    describe('hiringEmployee', function () {
        it('should return "John was successfully hired for the position Programmer."', function () {
            expect(companyAdministration.hiringEmployee("John", "Programmer", 3)).to.equal("John was successfully hired for the position Programmer.");
        });
        it('should return "John is not approved for this position."', function () {
            expect(companyAdministration.hiringEmployee("John", "Programmer", 2)).to.equal("John is not approved for this position.");
        });
        it('should throw an error', function () {
            expect(() => companyAdministration.hiringEmployee("John", "Manager", 2)).to.throw("We are not looking for workers for this position.");
        });
    });
    describe('calculateSalary', function () {
        it('should return 300', function () {
            expect(companyAdministration.calculateSalary(20)).to.equal(300);
        });
        it('should return 1500', function () {
            expect(companyAdministration.calculateSalary(100)).to.equal(1500);
        });
        it('should return 2400', function () {
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
        });
        it('should return 4000', function () {
            expect(companyAdministration.calculateSalary(200)).to.equal(4000);
        });
        it('should return 0', function () {
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
        });
        it('should return -300', function () {
            expect(() => companyAdministration.calculateSalary(-20)).to.throw("Invalid hours");
        });
        it('should return NaN', function () {
            expect(() => companyAdministration.calculateSalary("20")).to.throw("Invalid hours");
        });
    });
    describe('firedEmployee', function () {
        it('should return "John, Jane"', function () {
            expect(companyAdministration.firedEmployee(["John", "Jane", "Bob"], 2)).to.equal("John, Jane");
        });
        it('should return "Invalid input" index is not in range', function () {
            expect(() => companyAdministration.firedEmployee(["John", "Jane", "Bob"], 3)).to.throw("Invalid input");
        });
        it('should return "Invalid input" index must be under 0', function () {
            expect(() => companyAdministration.firedEmployee(["John", "Jane", "Bob"], -1)).to.throw("Invalid input");
        });
        it('should return "Invalid input" index must be digit', function () {
            expect(() => companyAdministration.firedEmployee(["John", "Jane", "Bob"], '2')).to.throw("Invalid input");
        });
        it('should return "Invalid input" employee must be array', function () {
            expect(() => companyAdministration.firedEmployee(["John", "Jane", "Bob"], 4)).to.throw("Invalid input");
        });
    });
});