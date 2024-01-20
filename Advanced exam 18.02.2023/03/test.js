const { expect } = require("chai");
const findNewApartment = require("./findApartment");
describe("tests", function() {
describe("isGoodLocation", function() { 
        
    it("Throws an invalid input", () =>{
        expect(() => { findNewApartment.isGoodLocation(1, true) }).to.throw("Invalid input!");
    });
    it("Throws an invalid input", () =>{
        expect(() => { findNewApartment.isGoodLocation(["a"], true) }).to.throw("Invalid input!");
    });
    it("Throws an invalid input", () =>{
        expect(() => { findNewApartment.isGoodLocation("a", "a") }).to.throw("Invalid input!");
    });
    it("Throws an invalid input", () =>{
        expect(() => { findNewApartment.isGoodLocation("a", 1) }).to.throw("Invalid input!");
    });
    
    it("shows a valid message", function(){
        expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal("You can go on home tour!");
    })
    it("shows a valid message", function(){
        expect(findNewApartment.isGoodLocation("Plovdiv", true)).to.equal("You can go on home tour!");
    })
    it("shows a valid message", function(){
        expect(findNewApartment.isGoodLocation("Varna", true)).to.equal("You can go on home tour!");
    })
    it("shows a valid message", function(){
        expect(findNewApartment.isGoodLocation("Varna", false)).to.equal("There is no public transport in area.");
    })
    it("shows a valid message", function(){
        expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal("There is no public transport in area.");
    })
    it("shows a valid message", function(){
        expect(findNewApartment.isGoodLocation("Plovdiv", false)).to.equal("There is no public transport in area.");
    })
    it("shows a valid message", function(){
        expect(findNewApartment.isGoodLocation("Test", false)).to.equal("This location is not suitable for you.");
    })
    
    });
    describe("isLargeEnough", function() { 
        
        it("Throws an invalid input", () =>{
            expect(() => { findNewApartment.isLargeEnough([], 1) }).to.throw("Invalid input!");
        });
        it("Throws an invalid input", () =>{
            expect(() => { findNewApartment.isLargeEnough("a", 1) }).to.throw("Invalid input!");
        });
        it("Throws an invalid input", () =>{
            expect(() => { findNewApartment.isLargeEnough(1, 1) }).to.throw("Invalid input!");
        });
        it("Throws an invalid input", () =>{
            expect(() => { findNewApartment.isLargeEnough(["a"], "a") }).to.throw("Invalid input!");
        });
        
        it("Throws an invalid input", () =>{
            expect(() => { findNewApartment.isLargeEnough(["a"], "1") }).to.throw("Invalid input!");
        });
        it("shows a valid message", function(){
            expect(findNewApartment.isLargeEnough([40, 50, 60], 50)).to.equal('50, 60');
        })
        it("shows a valid message", function(){
            expect(findNewApartment.isLargeEnough([40, 50, 60], 60)).to.equal('60');
        })
        
        
        });
        describe("isItAffordable", function() { 
        
            it("Throws an invalid input", () =>{
                expect(() => { findNewApartment.isItAffordable(["a"], 1) }).to.throw("Invalid input!");
            });
            it("Throws an invalid input", () =>{
                expect(() => { findNewApartment.isItAffordable("a", 1) }).to.throw("Invalid input!");
            });
            it("Throws an invalid input", () =>{
                expect(() => { findNewApartment.isItAffordable(1,"a") }).to.throw("Invalid input!");
            });
            it("Throws an invalid input", () =>{
                expect(() => { findNewApartment.isItAffordable(1,["a"]) }).to.throw("Invalid input!");
            });
            it("Throws an invalid input", () =>{
                expect(() => { findNewApartment.isItAffordable("a","a") }).to.throw("Invalid input!");
            });
            it("Throws an invalid input", () =>{
                expect(() => { findNewApartment.isItAffordable(0, 1) }).to.throw("Invalid input!");
            });
            it("Throws an invalid input", () =>{
                expect(() => { findNewApartment.isItAffordable(-1, 1) }).to.throw("Invalid input!");
            });
            it("Throws an invalid input", () =>{
                expect(() => { findNewApartment.isItAffordable(1, -1) }).to.throw("Invalid input!");
            });
            it("Throws an invalid input", () =>{
                expect(() => { findNewApartment.isItAffordable(1, 0) }).to.throw("Invalid input!");
            });
            it("Throws an invalid input", () =>{
                expect(() => { findNewApartment.isItAffordable(0, 0) }).to.throw("Invalid input!");
            });
            
            
            it("shows a valid message", function(){
                expect(findNewApartment.isItAffordable(2, 1)).to.equal("You don't have enough money for this house!");
            })
            it("shows a valid message", function(){
                expect(findNewApartment.isItAffordable(2, 2)).to.equal("You can afford this home!");
            })
            it("shows a valid message", function(){
                expect(findNewApartment.isItAffordable(2, 3)).to.equal("You can afford this home!");
            })
           
            
            
            });
});