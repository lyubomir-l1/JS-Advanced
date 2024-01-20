describe("The lookupChar function should return", function(){
    it("'undefined' if the 'string' is incorrect", function(){
        expect(lookupChar(12, 4)).to.equal(undefined)
        
    });
    it("'undefined' if the 'index' is incorrect", function(){
        expect(lookupChar("happy", "5")).to.equal(undefined)
        
    });
    it("'undefined' if the 'index' is incorrect", function(){
        expect(lookupChar("happy", 1.2)).to.equal(undefined)
        
    });
    it("'Incorrect index' if the 'index' is incorrect", function(){
        expect(lookupChar("happy", -1)).to.equal("Incorrect index")
        
    });
    it("'Incorrect index' if the 'index' is incorrect", function(){
        expect(lookupChar("happy", 5)).to.equal("Incorrect index")
        
    });
    it("'a correct result' if the result is correct", function(){
        expect(lookupChar("happy", 4)).to.equal("y")
        
    });

});