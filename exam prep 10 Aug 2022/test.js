const { expect } = require("chai");

const movieTheater = require("./03. Movie Theater _Resources");

describe("tests", function() {
    
    describe("ageRestrictions", function() { 
        
        it("shows a valid message", function(){
            expect(movieTheater.ageRestrictions("G")).to.equal(`All ages admitted to watch the movie`);
        })
        it("shows a valid message", function(){
            expect(movieTheater.ageRestrictions("PG")).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
        })
        it("shows a valid message", function(){
            expect(movieTheater.ageRestrictions("R")).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`);
        })
        it("shows a valid message", function(){
            expect(movieTheater.ageRestrictions("NC-17")).to.equal(`No one under 17 admitted to watch the movie`);
        })
        it("shows a valid message", function(){
            expect(movieTheater.ageRestrictions("ABCD")).to.equal(`There are no age restrictions for this movie`);
        })
        });
        describe("moneySpent", function() { 
        
            it("shows an invalid tickets", function(){
                expect(() => {movieTheater.moneySpent("a", ["a"], ["b"])}).to.throw('Invalid input');
            })
            it("shows an invalid food", function(){
                expect(() => {movieTheater.moneySpent(1, 1, ["b"])}).to.throw('Invalid input');
            })
            it("shows an invalid drinks", function(){
                expect(() => {movieTheater.moneySpent(1, ["b"], 1)}).to.throw('Invalid input');
            })
            
            it("shows a valid message", function(){
                expect(movieTheater.moneySpent(1, ["Nachos"], ["Soda", "Water"])).to.equal(`The total cost for the purchase is 25.00`);
            })
            it("shows a valid message", function(){
                expect(movieTheater.moneySpent(1, ["Nachos", "Popcorn"], ["Soda", "Water"])).to.equal(`The total cost for the purchase is 29.50`);
            })
            it("shows a valid message", function(){
                expect(movieTheater.moneySpent(1, ["Popcorn"], ["Soda", "Water"])).to.equal(`The total cost for the purchase is 23.50`);
            })
            it("shows a valid message", function(){
                expect(movieTheater.moneySpent(1, ["Popcorn"], ["Water"])).to.equal(`The total cost for the purchase is 21.00`);
            })
            it("shows a valid message", function(){
                expect(movieTheater.moneySpent(3, ["Nachos", "Popcorn"], ["Soda", "Water"])).to.equal(`The total cost for the purchase with applied discount is 47.60`);
            })
            });
            describe("reservation", function() { 
        
                it("shows an invalid array", function(){
                    expect(() => {movieTheater.reservation("a", 1)}).to.throw('Invalid input');
                })
                it("shows an invalid array", function(){
                    expect(() => {movieTheater.reservation(1, 1)}).to.throw('Invalid input');
                })
                it("shows an invalid number", function(){
                    expect(() => {movieTheater.reservation(1, "a")}).to.throw('Invalid input');
                })
                it("shows an invalid number", function(){
                    expect(() => {movieTheater.reservation(1, ["a"])}).to.throw('Invalid input');
                })
                
                it("shows a valid message", function(){
                    expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 2}, { rowNumber: 2, freeSeats: 2}], 1)).to.equal(2);
                })
                // it("shows a valid message", function(){
                //     expect(movieTheater.moneySpent(1, ["Nachos", "Popcorn"], ["Soda", "Water"])).to.equal(`The total cost for the purchase is 29.50`);
                // })
                // it("shows a valid message", function(){
                //     expect(movieTheater.moneySpent(1, ["Popcorn"], ["Soda", "Water"])).to.equal(`The total cost for the purchase is 23.50`);
                // })
                // it("shows a valid message", function(){
                //     expect(movieTheater.moneySpent(1, ["Popcorn"], ["Water"])).to.equal(`The total cost for the purchase is 21.00`);
                // })
                // it("shows a valid message", function(){
                //     expect(movieTheater.moneySpent(3, ["Nachos", "Popcorn"], ["Soda", "Water"])).to.equal(`The total cost for the purchase with applied discount is 47.60`);
                // })
                });
    });