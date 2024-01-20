describe("addFive function", function(){
    it("should return 'undefined' if param is not a number", function(){
        expect(mathEnforcer.addFive("a")).to.equal(undefined)
        
    });
    it("should return 'undefined' if param is empty", function(){
        expect(mathEnforcer.addFive()).to.equal(undefined)
        
    });
    it("should return correct result", function(){
        expect (mathEnforcer.addFive(3.0123)).to.be.closeTo(8, 8.01);
        
    });
    it("should return correct result", function(){
        expect (mathEnforcer.addFive(3)).to.equal(8);
        
    });
    it("should return correct result", function(){
        expect (mathEnforcer.addFive(3.14)).to.equal(8.14);
        
    });
    it("should return correct result", function(){
        expect (mathEnforcer.addFive(0.99)).to.equal(5.99);
        
    });
    it("should return correct result", function(){
        expect (mathEnforcer.addFive(-10.99)).to.equal(-5.99);
        
    });
    it("should return correct result", function(){
        expect (mathEnforcer.addFive(-5)).to.equal(0);
        
    });
    it("should return correct result", function(){
        expect (mathEnforcer.addFive(-3)).to.equal(2);
        
    });
});   
describe("subtractTen function", function(){
    it("should return 'undefined' if param is not a number", function(){
        expect(mathEnforcer.subtractTen("a")).to.equal(undefined)
        
    });
    it("should return 'undefined' if param is empty", function(){
        expect(mathEnforcer.subtractTen()).to.equal(undefined)
        
    });
    it("should return correct result", function(){
        expect (mathEnforcer.subtractTen(12.0123)).to.be.closeTo(2, 2.01);
        
    });
    it("should return correct result", function(){
        expect (mathEnforcer.subtractTen(12)).to.equal(2);
        
    });
    it("should return correct result", function(){
        expect (mathEnforcer.subtractTen(12.3)).to.be.closeTo(2.3, 2.30);
        
    });
    it("should return correct result", function(){
        expect (mathEnforcer.subtractTen(10.01)).to.be.closeTo(0, 0.01);
        
    });
    it("should return correct result", function(){
        expect (mathEnforcer.subtractTen(-3)).to.equal(-13);
        
    });
    it("should return correct result", function(){
        expect (mathEnforcer.subtractTen(-3.14)).to.equal(-13.14);
        
    });
    it("should return correct result", function(){
        expect (mathEnforcer.subtractTen(10)).to.equal(0);
        
    });
});      
describe("sum function", function(){
    it("should return 'undefined' if param 1 is not a number", function(){
        expect(mathEnforcer.sum("a", 1)).to.equal(undefined)
        
    });
    it("should return 'undefined' if param 2 is not a number", function(){
        expect(mathEnforcer.sum(1, "a")).to.equal(undefined)
        
    });
    it("should return 'undefined' if both params are not a number", function(){
        expect(mathEnforcer.sum("b", "a")).to.equal(undefined)
        
    });
    it("should return 'undefined' if param is empty", function(){
        expect(mathEnforcer.sum()).to.equal(undefined)
        
    });
    
    it("should return correct result", function(){
        expect (mathEnforcer.sum(1, 2)).to.equal(3);
        
    });
    it("should return correct result", function(){
        expect (mathEnforcer.sum(-1, 2)).to.equal(1);
        
    });
    it("should return correct result", function(){
        expect (mathEnforcer.sum(-2, 1)).to.equal(-1);
        
    });
    it("should return correct result", function(){
        expect (mathEnforcer.sum(2.0123, 1)).to.be.closeTo(3, 3.01);
        
    });
    it("should return correct result", function(){
        expect (mathEnforcer.sum(0, 0)).to.equal(0);
        
    });
    it("should return correct result", function(){
        expect (mathEnforcer.sum(-5, -5)).to.equal(-10);
        
    });
    it("should return correct result", function(){
        expect (mathEnforcer.sum(-5, 3.1)).to.be.closeTo(-1.9, 0.01 );
        
    });
    it("should return correct result", function(){
        expect (mathEnforcer.sum(-5, 3.22)).to.be.closeTo(-1.78, 0.01 );
        
    });
    it("should return correct result", function(){
        expect (mathEnforcer.sum(2.7, 3.4)).to.equal(6.1);
        
    });
}); 