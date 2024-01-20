function solve(array, step){
    let newStr = [];
    for(let i = 0; i < array.length; i+=step){
        newStr.push(array[i])
    }
    return newStr;
    }