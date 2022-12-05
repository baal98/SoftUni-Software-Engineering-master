var chai = require('chai')
    , expect = chai.expect
    , assert = chai.assert
    , should = chai.should();
const library = require('../library');

describe('Library', function () {
    describe('calcPriceOfBook', function () {
        it('should return price of book', function () {
            let result = library.calcPriceOfBook("Harry Potter", 1990);
            expect(result).to.equal("Price of Harry Potter is 20.00");
        });
        it('should return half price of book', function () {
            let result = library.calcPriceOfBook("Harry Potter", 1980);
            expect(result).to.equal("Price of Harry Potter is 10.00");
        });
        it('should throw error if invalid input name of book must be string', function () {
            expect(() => library.calcPriceOfBook(123, 1990)).to.throw("Invalid input");
        });
        it('should throw error if invalid input year must be integer', function () {
            expect(() => library.calcPriceOfBook("Harry Potter", "1990")).to.throw("Invalid input");
        });
    });
    describe('findBook', function () {
        it('should return "We found the book you want."', function () {
            let result = library.findBook(["Harry Potter", "Lord of the Rings"], "Harry Potter");
            expect(result).to.equal("We found the book you want.");
        });
        it('should return "The book you are looking for is not here!"', function () {
            let result = library.findBook(["Harry Potter", "Lord of the Rings"], "The Hobbit");
            expect(result).to.equal("The book you are looking for is not here!");
        });
        it('should throw error if no books available', function () {
            expect(() => library.findBook([], "Harry Potter")).to.throw("No books currently available");
        });
    });
    describe('arrangeTheBooks', function () {
        it('should return "Great job, the books are arranged."', function () {
            let result = library.arrangeTheBooks(40);
            expect(result).to.equal("Great job, the books are arranged.");
        });
        it('should return "Insufficient space, more shelves need to be purchased."', function () {
            let result = library.arrangeTheBooks(50);
            expect(result).to.equal("Insufficient space, more shelves need to be purchased.");
        });
        it('should throw error if invalid if input is not digit', function () {
            expect(() => library.arrangeTheBooks("30")).to.throw("Invalid input");
        });
        it('should throw error if invalid input is under 0', function () {
            expect(() => library.arrangeTheBooks(-5)).to.throw("Invalid input");
        });
    });
});
    