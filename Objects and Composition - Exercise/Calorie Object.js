function solve(array) {
    const result = {};
    for(let i = 0; i < array.length; i++){
     const element = array[i];
     const calories = Number(array[i+1]);
     if(i % 2 === 0){
       result[element] = calories
     }
    }
 return result;
 }