function solve(number){
    let numToStr = number.toString();
    let sum = 0;
    let isSame = true;
    let firstSymbol = numToStr[0];
    for(let i = 0; i < numToStr.length; i++){
        if(firstSymbol !== numToStr[i]){
            isSame = false;
        }
        sum += Number(numToStr[i]);
    }
    console.log(isSame);
    console.log(sum);
    }