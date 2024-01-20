const { expect } = require("chai");
const { calculatePriceOfCar, checkBudget } = require("./rentCar");
const rentCar = require("./rentCar");
describe("Tests", function() { 
    it("finds one car", () => {
        const shop = ["a", "b", "c"];
        const model = "a";
        const result = rentCar.searchCar(shop, model);
        expect(result).to.equal("There is 1 car of model a in the catalog!");
    });
    it("finds two cars", () => {
        const shop = ["a", "b", "a"];
        const model = "a";
        const result = rentCar.searchCar(shop, model);
        expect(result).to.equal("There is 2 car of model a in the catalog!");
    });
    it("invalid shop(number)", () => {

        expect(() => { rentCar.searchCar(2, "a") }).to.throw("Invalid input!");
    });
    it("invalid shop (string)", () => {
        expect(() => { rentCar.searchCar("abc", "a") }).to.throw("Invalid input!");
    });
    it("invalid model", () => {
        expect(() => { rentCar.searchCar(["a", "b", "c"], 5) }).to.throw("Invalid input!");
    });
    it("car not found", () => {
        expect(() => { rentCar.searchCar(["a", "b", "c"], "d") }).to.throw("There are no such models in the catalog!");
    });
    
        });


    describe("calculatePriceOfCar", function(){
        it("invalid input (model)", () => {
            expect(() => { calculatePriceOfCar(1, 1) }).to.throw("Invalid input!");
        });
        it("invalid input (days)", () => {
            expect(() => {  calculatePriceOfCar("Volkswagen", "a") }).to.throw("Invalid input!");
        });
        it("correct price for model", () => {
            const result = rentCar.calculatePriceOfCar("Volkswagen", 2);
            expect(result).to.equal("You choose Volkswagen and it will cost $40!");
        });
        it("model not found", () => {
            expect(() => { calculatePriceOfCar("a", 1) }).to.throw("No such model in the catalog!");
        });
        
    })

    describe("checkBudget", function(){
        it("invalid cost per day", () => {
            expect(() => { checkBudget("1", 1, 1) }).to.throw("Invalid input!");
        });
        it("invalid days", () => {
            expect(() => { checkBudget(1, "1", 1) }).to.throw("Invalid input!");
        });
        it("invalid budget", () => {
            expect(() => { checkBudget(1, 1, "1") }).to.throw("Invalid input!");
        });
        it("can afford", () => {
            const result = rentCar.checkBudget(1, 1, 1)
            expect(result).to.equal("You rent a car!");
        });
        it("can afford", () => {
            const result = rentCar.checkBudget(10, 3, 45)
            expect(result).to.equal("You rent a car!");
        });
        it("cannot afford", () => {
            const result = rentCar.checkBudget(10, 3, 25)
            expect(result).to.equal("You need a bigger budget!");
        });
        
    })