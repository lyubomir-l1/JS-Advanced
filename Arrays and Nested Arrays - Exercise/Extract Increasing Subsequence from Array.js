function solve(array){
    let biggestNumber = array.shift();
    const finalResult = [biggestNumber];
    for (const number of array) {
        if(number >= biggestNumber){
            biggestNumber = number;
            finalResult.push(number);
    
        }
    }
    return finalResult;
    }