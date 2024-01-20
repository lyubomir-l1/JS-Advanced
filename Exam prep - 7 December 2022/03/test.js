const { expect } = require("chai");
const motorcycleRider = require("./Motorcycle Rider");
describe("tests", function() {
    
    describe("licenseRestriction", function() { 
        
        it("shows a valid message", function(){
            expect(motorcycleRider.licenseRestriction("AM")).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.");
        })
        it("shows a valid message", function(){
            expect(motorcycleRider.licenseRestriction("A1")).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.");
        })
        it("shows a valid message", function(){
            expect(motorcycleRider.licenseRestriction("A2")).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.");
        })
        it("shows a valid message", function(){
            expect(motorcycleRider.licenseRestriction("A")).to.equal("No motorcycle restrictions, and the minimum age is 24.");
        })
        it("Throws an invalid input", () =>{
            expect(() => { motorcycleRider.licenseRestriction("B") }).to.throw("Invalid Information!");
        });
        
        });
        describe("motorcycleShowroom", function() { 
        
            it("Throws an invalid input", () =>{
                expect(() => { motorcycleRider.motorcycleShowroom("B", 50) }).to.throw("Invalid Information!");
            });
            it("Throws an invalid input", () =>{
                expect(() => { motorcycleRider.motorcycleShowroom(1, 50) }).to.throw("Invalid Information!");
            });
            it("Throws an invalid input", () =>{
                expect(() => { motorcycleRider.motorcycleShowroom([], 50) }).to.throw("Invalid Information!");
            });
            it("Throws an invalid input", () =>{
                expect(() => { motorcycleRider.motorcycleShowroom(["a"], "a") }).to.throw("Invalid Information!");
            });
            it("Throws an invalid input", () =>{
                expect(() => { motorcycleRider.motorcycleShowroom(["a"], "1") }).to.throw("Invalid Information!");
            });
            it("Throws an invalid input", () =>{
                expect(() => { motorcycleRider.motorcycleShowroom(["a"], 49) }).to.throw("Invalid Information!");
            });
            it("shows a valid message", function(){
                expect(motorcycleRider.motorcycleShowroom(["125", "130", "80"], 120)).to.equal(`There are 1 available motorcycles matching your criteria!`);
            })
            it("shows a valid message", function(){
                expect(motorcycleRider.motorcycleShowroom(["100", "200", "115"], 120)).to.equal(`There are 2 available motorcycles matching your criteria!`);
            })
            
            });
            describe("otherSpendings", function() { 
        
                it("Throws an invalid input", () =>{
                    expect(() => { motorcycleRider.otherSpendings("B", ["a"], true) }).to.throw("Invalid Information!");
                });
                it("Throws an invalid input", () =>{
                    expect(() => { motorcycleRider.otherSpendings(1, ["a"], true) }).to.throw("Invalid Information!");
                });
                
                it("Throws an invalid input", () =>{
                    expect(() => { motorcycleRider.otherSpendings(["a"], 1, true) }).to.throw("Invalid Information!");
                });
                it("Throws an invalid input", () =>{
                    expect(() => { motorcycleRider.otherSpendings(["a"], "1", true) }).to.throw("Invalid Information!");
                });
                it("Throws an invalid input", () =>{
                    expect(() => { motorcycleRider.otherSpendings(["a"], ["b"], 1) }).to.throw("Invalid Information!");
                });
                it("Throws an invalid input", () =>{
                    expect(() => { motorcycleRider.otherSpendings(["a"], ["b"], "a") }).to.throw("Invalid Information!");
                });
               
                it("shows a valid message", function(){
                    expect(motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], false)).to.equal(`You spend $600.00 for equipment and consumables!`);
                })
                it("shows a valid message", function(){
                    expect(motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], true)).to.equal(`You spend $540.00 for equipment and consumables with 10% discount!`);
                })
                // it("shows a valid message", function(){
                //     expect(motorcycleRider.motorcycleShowroom(["100", "200", "115"], 120)).to.equal(`There are 2 available motorcycles matching your criteria!`);
                // })
                
                });
    });