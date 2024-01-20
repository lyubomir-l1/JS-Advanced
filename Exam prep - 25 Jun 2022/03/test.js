const { expect } = require("chai");
const bookSelection = require("./bookSelection");
describe("tests", function() {
    
    describe("isGenreSuitable", function() { 
        
        it("shows a valid message", function(){
            expect(bookSelection.isGenreSuitable("Thriller", 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
        })
        it("shows a valid message", function(){
            expect(bookSelection.isGenreSuitable("Horror", 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
        })
        it("shows a valid message", function(){
            expect(bookSelection.isGenreSuitable("Horror", 1)).to.equal(`Books with Horror genre are not suitable for kids at 1 age`);
        })
        it("shows a valid message", function(){
            expect(bookSelection.isGenreSuitable("Thriller", 1)).to.equal(`Books with Thriller genre are not suitable for kids at 1 age`);
        })
        it("shows a valid message", function(){
            expect(bookSelection.isGenreSuitable("Horror", 13)).to.equal(`Those books are suitable`);
        })
        it("shows a valid message", function(){
            expect(bookSelection.isGenreSuitable("Thriller", 13)).to.equal(`Those books are suitable`);
        })
        it("shows a valid message", function(){
            expect(bookSelection.isGenreSuitable("Text", 12)).to.equal(`Those books are suitable`);
        })
        it("shows a valid message", function(){
            expect(bookSelection.isGenreSuitable("Text", 13)).to.equal(`Those books are suitable`);
        })
      
        });
        describe("isItAffordable", function() { 
        
            it("Throws an invalid input", () =>{
                expect(() => { bookSelection.isItAffordable("a", 1) }).to.throw("Invalid input");
            });
            it("Throws an invalid input", () =>{
                expect(() => { bookSelection.isItAffordable(1, "a") }).to.throw("Invalid input");
            });
            it("Throws an invalid input", () =>{
                expect(() => { bookSelection.isItAffordable("a", "a") }).to.throw("Invalid input");
            });
            it("shows a valid message", function(){
                expect(bookSelection.isItAffordable(1, 2)).to.equal(`Book bought. You have 1$ left`);
            });
            it("shows a valid message", function(){
                expect(bookSelection.isItAffordable(1, 1)).to.equal(`Book bought. You have 0$ left`);
            });
            it("shows a valid message", function(){
                expect(bookSelection.isItAffordable(2, 1)).to.equal(`You don't have enough money`);
            });
            describe("suitableTitles", function() { 
        
                it("Throws an invalid input", () =>{
                    expect(() => { bookSelection.suitableTitles(["a"], 1) }).to.throw("Invalid input");
                });
                it("Throws an invalid input", () =>{
                    expect(() => { bookSelection.suitableTitles("a", "a") }).to.throw("Invalid input");
                });
                it("Throws an invalid input", () =>{
                    expect(() => { bookSelection.suitableTitles("a", 1) }).to.throw("Invalid input");
                });
                it("Throws an invalid input", () =>{
                    expect(() => { bookSelection.suitableTitles(1, 1) }).to.throw("Invalid input");
                });
                it("Throws an invalid input", () =>{
                    expect(() => { bookSelection.suitableTitles([], 1) }).to.throw("Invalid input");
                });
                it('checkes result', () => {
                    let input = [
                        { title: "The Da Vinci Code", genre: "Thriller" },
                        { title: "The Da Vinci Code1", genre: "Thriller" },
                        { title: "The Da Vinci Code2", genre: "Thriller" }  
                    ]
                    let result = ["The Da Vinci Code", "The Da Vinci Code1", "The Da Vinci Code2"]
                    expect(bookSelection.suitableTitles(input, 'Thriller').join(' ')).equal(result.join(' '));            
                });
                
            });
        });
    });
