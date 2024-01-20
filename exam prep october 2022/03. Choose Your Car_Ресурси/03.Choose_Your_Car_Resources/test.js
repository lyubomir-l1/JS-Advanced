const { expect } = require("chai");
const chooseYourCar = require("./chooseYourCar");
describe("Tests", function(){
    describe("choosingType", function(){
it("shows an invalid year", function(){
    expect(() => {chooseYourCar.choosingType("Sedan", "red", 1899)}).to.throw('Invalid Year!');
})
it("shows an invalid year", function(){
    expect(() => {chooseYourCar.choosingType("Sedan", "red", 2023)}).to.throw('Invalid Year!');
})
it("shows an invalid type", function(){
    expect(() => {chooseYourCar.choosingType("Headjbeg", "red", 2022)}).to.throw('This type of car is not what you are looking for.');
})
it("shows a valid car", function(){
    expect(chooseYourCar.choosingType("Sedan", "red", 2010))
    .to.equal('This red Sedan meets the requirements, that you have.');
})
it("shows a valid car", function(){
    expect(chooseYourCar.choosingType("Sedan", "red", 2022))
    .to.equal('This red Sedan meets the requirements, that you have.');
})
it("shows a nonvalid car", function(){
    expect(chooseYourCar.choosingType("Sedan", "blue", 2009))
    .to.equal('This Sedan is too old for you, especially with that blue color.');
})

    })
    describe("brandName ", function(){
        it("shows an invalid brand", function(){
            expect(() => {chooseYourCar.brandName("a", 0 )}).to.throw('Invalid Information!');
        })
        it("shows an invalid brand", function(){
            expect(() => {chooseYourCar.brandName([], 0 )}).to.throw('Invalid Information!');
        })
        it("shows an invalid brand", function(){
            expect(() => {chooseYourCar.brandName(3, 0 )}).to.throw('Invalid Information!');
        })
        it("shows an invalid index", function(){
            expect(() => {chooseYourCar.brandName(["a"], -1 )}).to.throw('Invalid Information!');
        })
        it("shows an invalid index", function(){
            expect(() => {chooseYourCar.brandName(["a", "b", "c"], 3 )}).to.throw('Invalid Information!');
        })
        it("shows an invalid index", function(){
            expect(() => {chooseYourCar.brandName(["a", "b", "c"], "3" )}).to.throw('Invalid Information!');
        })
        it("shows a valid message", function(){
            expect(chooseYourCar.brandName(["a", "b", "c"], 1 )).to.equal('a, c');
        })
        
        
            })
            describe("carFuelConsumption  ", function(){
                it("shows an invalid number", function(){
                    expect(() => {chooseYourCar.carFuelConsumption("a", 1 )}).to.throw('Invalid Information!');
                })
                it("shows an invalid number", function(){
                    expect(() => {chooseYourCar.carFuelConsumption(-1, 1 )}).to.throw('Invalid Information!');
                })
                it("shows an invalid number", function(){
                    expect(() => {chooseYourCar.carFuelConsumption(1, "1" )}).to.throw('Invalid Information!');
                })
                it("shows an invalid number", function(){
                    expect(() => {chooseYourCar.carFuelConsumption(1, -1 )}).to.throw('Invalid Information!');
                })
                it("shows an invalid number", function(){
                    expect(() => {chooseYourCar.carFuelConsumption(-1, -1 )}).to.throw('Invalid Information!');
                })
                it("shows an invalid number", function(){
                    expect(() => {chooseYourCar.carFuelConsumption("a", "b" )}).to.throw('Invalid Information!');
                })
                it("shows a valid message", function(){
                    expect(chooseYourCar.carFuelConsumption(40, 2 )).to.equal('The car is efficient enough, it burns 5.00 liters/100 km.');
                })
                it("shows a valid message", function(){
                    expect(chooseYourCar.carFuelConsumption(100, 7 )).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
                })
                it("shows a valid message", function(){
                    expect(chooseYourCar.carFuelConsumption(100, 8 )).to.equal('The car burns too much fuel - 8.00 liters!');
                })
                
                
                    })
})