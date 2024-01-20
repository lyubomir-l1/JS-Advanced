const { expect } = require("chai");
const { calcPriceOfFlowers, checkFlowersAvailable, } = require("./flowerShop");
const flowerShop = require("./flowerShop");

describe("tests", function() {
describe("calcPriceOfFlowers Tests", function() { 
    it("Throws an invalid input(quantity)", () =>{
        expect(() => { calcPriceOfFlowers("a", 1, "a") }).to.throw("Invalid input!");
    });
    it("Throws an invalid input(price)", () =>{
        expect(() => { calcPriceOfFlowers("a", "b", 1) }).to.throw("Invalid input!");
    });
    it("Throws an invalid input(invalid flower)", () =>{
        expect(() => { calcPriceOfFlowers(1, 1, 1) }).to.throw("Invalid input!");
    });
    it("shows correct answear", () =>{
        const result = flowerShop.calcPriceOfFlowers("a", 2, 3)
        expect(result).to.equal(`You need $${(6).toFixed(2)} to buy a!`);
    });
    });
    describe("checkFlowersAvailable Tests", function() { 
        it("Throws an error(no flower)", () =>{
            const result = flowerShop.checkFlowersAvailable("a", ["b", "c"])
            expect(result).to.equal(`The a are sold! You need to purchase more!`);
        });
        it("There is flower)", () =>{
            const result = flowerShop.checkFlowersAvailable("a", ["b", "a"])
            expect(result).to.equal(`The a are available!`);
        });
        describe("sellFlowers Tests", function() { 
            it("Throws an invalid input(array)", () =>{
                expect(() => { flowerShop.sellFlowers(1, 1) }).to.throw("Invalid input!");
            });
            it("Throws an invalid input(array)", () =>{
                expect(() => { flowerShop.sellFlowers("a", 1) }).to.throw("Invalid input!");
            });
            it("Throws an invalid input(span)", () =>{
                expect(() => { flowerShop.sellFlowers(["a", "b"], "1") }).to.throw("Invalid input!");
            });
            it("Throws an invalid input(span)", () =>{
                expect(() => { flowerShop.sellFlowers(["a", "b"], 2.23) }).to.throw("Invalid input!");
            });
            it("Throws an invalid input(span)", () =>{
                expect(() => { flowerShop.sellFlowers(["a", "b"], -1) }).to.throw("Invalid input!");
            });
            it("Throws an invalid input(span)", () =>{
                expect(() => { flowerShop.sellFlowers(["a", "b"], 3) }).to.throw("Invalid input!");
            });
            it("There is result", () =>{
                const result = flowerShop.sellFlowers(["b", "c", "d"], 2)
            expect(result).to.equal(`b / c`);
            });
        });
    });
});
    