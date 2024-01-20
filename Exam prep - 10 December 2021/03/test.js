const { expect } = require("chai");
const companyAdministration = require("./companyAdministration");
describe("tests", function() {
    
    describe("hiringEmployee", function() { 
        
        it("Throws an invalid input", () =>{
            expect(() => { companyAdministration.hiringEmployee("a", "Test", 12) }).to.throw("We are not looking for workers for this position.");
        });
        it("shows a valid message", function(){
            expect(companyAdministration.hiringEmployee("a", "Programmer", 1)).to.equal(`a is not approved for this position.`);
        })
        it("shows a valid message", function(){
            expect(companyAdministration.hiringEmployee("a", "Programmer", 2)).to.equal(`a is not approved for this position.`);
        })
        it("shows a valid message", function(){
            expect(companyAdministration.hiringEmployee("a", "Programmer", 3)).to.equal(`a was successfully hired for the position Programmer.`);
        })
        
        });
        describe("calculateSalary", function() { 
        
            it("Throws an invalid input", () =>{
                expect(() => { companyAdministration.calculateSalary("a") }).to.throw("Invalid hours");
            });
            it("Throws an invalid input", () =>{
                expect(() => { companyAdministration.calculateSalary(-1) }).to.throw("Invalid hours");
            });
            it("shows a valid message", function(){
                expect(companyAdministration.calculateSalary(1)).to.equal(15);
            })
            it("shows a valid message", function(){
                expect(companyAdministration.calculateSalary(2)).to.equal(30);
            })
            it("shows a valid message", function(){
                expect(companyAdministration.calculateSalary(160)).to.equal(2400);
            })
            it("shows a valid message", function(){
                expect(companyAdministration.calculateSalary(161)).to.equal(3415);
            })
    });
    describe("firedEmployee", function() { 
        
        it("Throws an invalid input", () =>{
            expect(() => { companyAdministration.firedEmployee(["a"], "1") }).to.throw("Invalid input");
        });
        it("Throws an invalid input", () =>{
            expect(() => { companyAdministration.firedEmployee("a", "1") }).to.throw("Invalid input");
        });
        it("Throws an invalid input", () =>{
            expect(() => { companyAdministration.firedEmployee(1, "1") }).to.throw("Invalid input");
        });
        it("Throws an invalid input", () =>{
            expect(() => { companyAdministration.firedEmployee(1, 1) }).to.throw("Invalid input");
        });
        it("Throws an invalid input", () =>{
            expect(() => { companyAdministration.firedEmployee([], 1) }).to.throw("Invalid input");
        });
        it("shows a valid message", function(){
            expect(companyAdministration.firedEmployee(["a", "b", "c"], 2)).to.equal("a, b");
        })
        it("shows a valid message", function(){
            expect(companyAdministration.firedEmployee(["a"], 0)).to.equal("");
        })
});
});