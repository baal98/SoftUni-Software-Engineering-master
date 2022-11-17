var chai = require('chai')
    , expect = chai.expect
    , assert = chai.assert
    , should = chai.should();

const bookSelection = require('../bookSelection');
    
describe('bookSelection', function () {
    describe('isGenreSuitable', function () {
        it('should return "Those books are suitable" when genre is not "Thriller" or "Horror" and age is greater than 12', function () {
            expect(bookSelection.isGenreSuitable('Comedy', 13)).to.equal('Those books are suitable');
        });
        it('should return "Those books are suitable" when genre is not "Thriller" or "Horror" and age is less than 12', function () {
            expect(bookSelection.isGenreSuitable('Comedy', 11)).to.equal('Those books are suitable');
        });
        it('should return "Those books are suitable" when genre is "Thriller" or "Horror" and age is greater than 12', function () {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal('Those books are suitable');
        });
        it('should return "Those books are suitable" when genre is "Thriller" or "Horror" and age is less than 12', function () {
            expect(bookSelection.isGenreSuitable('Horror', 11)).to.equal('Those books are suitable');
        });
        it('should return "Books with Thriller genre are not suitable for kids at 11 age" when genre is "Thriller" and age is less than 12', function () {
            expect(bookSelection.isGenreSuitable('Thriller', 11)).to.equal('Books with Thriller genre are not suitable for kids at 11 age');
        });
        it('should return "Books with Horror genre are not suitable for kids at 11 age" when genre is "Horror" and age is less than 12', function () {
            expect(bookSelection.isGenreSuitable('Horror', 11)).to.equal('Books with Horror genre are not suitable for kids at 11 age');
        });
    });
    describe('isItAffordable', function () {
        it('should throw an error when price is not a number', function () {
            expect(() => bookSelection.isItAffordable('10', 20)).to.throw('Invalid input');
        });
        it('should throw an error when budget is not a number', function () {
            expect(() => bookSelection.isItAffordable(10, '20')).to.throw('Invalid input');
        });
        it('should return "You don\'t have enough money" when budget is less than price', function () {
            expect(bookSelection.isItAffordable(20, 10)).to.equal("You don't have enough money");
        });
        it('should return "Book bought. You have 10$ left" when budget is greater than price', function () {
            expect(bookSelection.isItAffordable(10, 20)).to.equal('Book bought. You have 10$ left');
        });
    });
    describe('suitableTitles', function () {
        it('should throw an error when array is not an array', function () {
            expect(() => bookSelection.suitableTitles('array', 'Thriller')).to.throw('Invalid input');
        });
        it('should throw an error when wantedGenre is not a string', function () {
            expect(() => bookSelection.suitableTitles([{ title: 'The Shining', genre: 'Horror' }], 10)).to.throw('Invalid input');
        });
        it('should return an array with the title of the book with the wanted genre', function () {
            expect(bookSelection.suitableTitles([{ title: 'The Shining', genre: 'Horror' }], 'Horror')).to.deep.equal(['The Shining']);
        });
        it('should return an empty array when there are no books with the wanted genre', function () {
            expect(bookSelection.suitableTitles([{ title: 'The Shining', genre: 'Horror' }], 'Thriller')).to.deep.equal([]);
        });
    });
});